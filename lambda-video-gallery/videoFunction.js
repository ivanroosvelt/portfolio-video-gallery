var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient();
const https = require('https');

// Request video Youtube API data from YoutubeVideoID  
function request_youtube_data(id) {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${GC_API_KEY}&part=snippet`;
  // Return zero dependency promise based http get
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
      let rawData = '';
      res.on('data', chunk => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });
    req.on('error', err => {
      reject(new Error(err));
    });
  });
}

// Return ID Youtube from YoutubeURL
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

/**
 * For simplicity, handle request on one endpoint with body format in any httb verb:
 * {operation:"create|delete|list",body:"url|id"}
 * returns:
 * - create: created video
 * - delete: confirmation message
 * - list: array of videos
 */
exports.handler = async (event) => {
    if(event.httpMethod==="OPTIONS") return { statusCode: 204 }
    try {
        const payload = JSON.parse(event.body);
        const { operation, body } = payload;
        let resp = null;
        switch (operation) {
            case 'create':
                let createUrl = body.url;
                let youtubeId = youtube_parser(createUrl);
                let details = await request_youtube_data(youtubeId);
                details = details.items[0].snippet;
                let Item = { 
                    id: youtubeId, //context.awsRequestId,
                    title: details.title,
                    description: details.description.substring(0,120) + "...",
                    image: details.thumbnails.high.url,
                    url: createUrl
                };
                await dynamo
                    .put({
                        TableName: "videos",
                        Item
                    })
                    .promise();
                resp = Item;
                break;
            case 'delete':
                let videoId = body.id;
                await dynamo.delete({
                    TableName: "videos",
                    Key: { id: videoId }
                }).promise();
                resp = `Deleted ${videoId}`;
                break;
            case 'list':
                resp = await dynamo.scan({ TableName: "videos" }).promise();
                resp = resp.Items;
                break;
            default:
                throw (`Unknown operation: ${operation}`);
        }
        const headers = {        
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin" : "*",
          "Allow" : "OPTIONS, POST",
          "Access-Control-Allow-Methods" : "OPTIONS, POST",
          "Access-Control-Allow-Headers" : "*",
          "Access-Control-Allow-Credentials" : true
        };
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(resp)
        };
    } catch (e) {
        console.log(e);
        return {
            statusCode: 400,
            body: JSON.stringify(e)
        };
    }
};
