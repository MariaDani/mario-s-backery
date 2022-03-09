<template>
    <div class="main-page">
        <h1 class="main-page__head">World's favorite cinnamon buns</h1>
        <p class="main-page__paragraph">
            <router-link :to="{ name: 'catalogue' }">
                Choose yours!
            </router-link>
        </p>
        <my-slider />
    </div>
</template>

<script>
import MySlider from './slider/MySlider.vue'

export default {
    name: 'MainPage',
    components: { MySlider },

    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.main-page {
    color: rgb(91,80,127);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;

    &__head {
        font-size: 40px;
        font-weight: normal;
    }

    &__paragraph a{
        font-size: 30px;
        text-decoration: none;

        &:hover {
            color: rgb(41,26,88);
        }
        &:focus {
            color: rgb(139,132,165);
        }
    }
}

</style>