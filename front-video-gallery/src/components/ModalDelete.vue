<template>
    <div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" aria-labelledby="modalDeleteLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body">
                    ¿Seguro que desea eliminar este video?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" @click="$emit('onDelete')">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.modal-dialog {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
}

.modal {
    border-radius: 15px;
}

.modal-content {
    box-shadow: none;
    -webkit-box-shadow: none;
}
.modal-body {
    margin: 20px 30px;
    font-size: 18px;
}

.modal-footer {
    padding-bottom: 20px;
    border-top: none;
}
.btn-default {
    display: inline-block;
    margin: auto;
    width: 180px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 12px;
    line-height: 21px;
    color: #136AE4;

}
.btn-primary {
    display: inline-block;
    width: 180px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 12px;
    line-height: 21px;
    background: #136AE4;
}
.close {
    position: relative;
    z-index: 2;
    opacity: 1;
    margin: 20px 30px;
    font-size: 28px;
}

</style>