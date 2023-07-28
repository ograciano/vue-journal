<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light"> 2023, Jueves</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir Foto <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucedio hoy?"></textarea>
    </div>
    
    <!-- icono de guardar de fa -->
    <Fab icon="fa fa-2x fa-save" />
    <img class="img-thumbnail" src="https://www.angeldecuir.com.mx/wp-content/uploads/2017/05/Mario-Luigi-by-Nuno-Benito-.jpg" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'entry-view',
    components:{
        Fab: defineAsyncComponent(() => import(/* webpackChunkName: "daybook-fab" */ '../components/Fab')),
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    height: 90%;
    border: none;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>