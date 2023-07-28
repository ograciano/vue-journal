<template>
    <div class="mb-3 pointer p-2 entry-contaier" @click="goToEntry">
        <div class="entry-title d-flex">
            <span class="text-success fw-bold">27</span>
            <span class="mx-1">Julio</span>
            <span class="mx-2 fw-light fs-5">2023, Jueves</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum hic saepe fuga error reiciendis autem, iusto facere quaerat tempora repudiandae quo quasi ea eveniet quam voluptatibus! Ratione, quas tempore!
        </div>
    </div>
</template>

<script>
export default {
    name: 'entry-item',
    data() {
        return {
            id: 123,
        }
    },
    methods: {
        goToEntry(){
            this.$router.push({
                name: 'entry',
                params: {id: this.id}
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.entry-contaier{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
        
    }

    .entry-description{
        font-size: 15px;
    }
}

</style>