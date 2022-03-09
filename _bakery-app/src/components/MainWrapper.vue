<template>
    <div class="main-wrapper">
        <my-header />
        <router-view></router-view>
    </div>
</template>

<script>
import MyHeader from './layout/MyHeader.vue';

export default {
    name: 'MainWrapper',
    components: { MyHeader, },

    data() {
        return {}
    },
    computed: {},
    methods: {},
}

</script>

<style lang="scss" scoped>
.main-wrapper {
    width: 100%;
    margin: 0 auto;
}
</style>
