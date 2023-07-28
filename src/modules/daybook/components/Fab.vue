<template>
    <div class="fab">
        <button class="btn btn-primary">
            <i :class="icon"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'fab-item',
    props:{
        icon: {
            type: String,
            required: true,
            default: 'fa fa-2x fa-plus'
        },
    }

}
</script>

<style lang="scss" scoped>
button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

</style>