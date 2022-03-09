<template>
    <div class="wrapper">
        <div class="slider-wrapper">
            <div 
                class="slider"
                :style="{ 'margin-left': '-' + (100*currentSlideIndex) + '%' }"
            >
                <slider-item 
                    v-for="item in sliderItems"
                    :key="item.id"
                    :itemData="item"
                />
            </div>
        </div>
        <div class="slider__buttons">
            <button class="buttonPrev">
                <i 
                    class="material-icons"
                    @click="prevSlide"
                >
                   chevron_left
                </i>
            </button>
            <button class="buttonNext">
                <i 
                    class="material-icons"
                    @click="nextSlide"
                >
                    chevron_right
                </i>
            </button>
        </div>
    </div>
</template>

<script>
import SliderItem from './SliderItem.vue';

export default {
    name: 'MySlider',
    components: { SliderItem },

    data() {
        return {
            sliderItems: [
                { id:1, name: 'pic1', img: '1.jpeg' },
                { id:2, name: 'pic1', img: '2.jpeg' },
                { id:3, name: 'pic1', img: '3.jpeg' },
                { id:4, name: 'pic1', img: '4.jpeg' },
                { id:5, name: 'pic1', img: '5.jpeg' }
            ],

            currentSlideIndex: 0,
            interval: 2000, 
        }
    },

    methods: {
        prevSlide() {
            if(this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            }
        },

        nextSlide() {
            if(this.currentSlideIndex >= this.sliderItems.length - 1) {
                this.currentSlideIndex = 0;
            } else {
                this.currentSlideIndex++;
            }
        },
    },

    mounted() {
        if(this.interval > 0) {
            setInterval(() => {
                this.nextSlide()
            }, this.interval);
        }
    }
}
</script>

<style lang="scss">
.slider-wrapper {
    max-width: 800px;
    max-height: 500px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.slider {
    display: flex;
    transition: all ease .5s;
    margin-top: 100px;

    &__buttons {

        .buttonPrev, .buttonNext {
            border: none;
            border-radius: 60px;

            background: rgba(224, 222, 231, 0.40);
            color: rgb(139,132,165);

            min-width: 50px;
            min-height: 50px;

            margin-top: 20px;

            position: absolute;
            top: 510px;

            cursor: pointer;
        }

        .buttonPrev {
            left: 450px;
        }

        .buttonNext {
            right: 450px;
        }
        
    }
}

</style>