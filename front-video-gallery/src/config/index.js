import PRODUCTION from "./environments/production";
import DEVELOPMENT from "./environments/development";

let currentEnv = DEVELOPMENT;

if (import.meta.env.PROD) {
  currentEnv = PRODUCTION;
}

console.log('Environment ', currentEnv);

export default currentEnv;