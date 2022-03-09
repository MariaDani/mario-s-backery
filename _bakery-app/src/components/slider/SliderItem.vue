<template>
    <div class="slider-item">
        <img :src=" require('../../assets/images/slider/' + itemData.img) " alt="">
    </div>
</template>

<script>

export default {
    name: 'SliderItem',
    props: {
        itemData: {
            type: Object,
            default: () => {}
        }
    },

    data() {
        return {

        }
    },

    methods: {}
}
</script>

<style lang="scss">

</style>