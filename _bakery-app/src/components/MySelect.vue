<template>

    <div class="select">
        <p 
            class="select__title"
            @click="areOptionsVisible = !areOptionsVisible"
        >{{ selectedOption }}</p>
        <div 
            class="select__options"
            v-if="areOptionsVisible"
        >
            <span
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{option.name}}
            </span>
        </div>
    </div>

</template>

<script>
export default {
    name: 'my-select',
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selectedOption: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            areOptionsVisible: false,
        }
    },

    methods: {
        selectOption(option) {
            this.$emit('select', option);
            this.areOptionsVisible = false;
        },

        hideOptions() {
            this.areOptionsVisible = false;
        }
    },

    mounted() {
        document.addEventListener('click', this.hideOptions.bind(this), true);
    },

    beforeDestroy() {
        document.removeEventListener('click', this.hideOptions);
    }
}
</script>

<style scoped lang="scss">
    .select {
        margin: 0;

        position: relative;
        top: 20px;
        width: 200px;

        cursor: pointer;

        text-align: center;

        &__title {
            border: 1px solid rgb(91,80,127);
            border-radius: 10px;
        }

        &__options {
            border: 1px solid rgb(91,80,127);
            border-radius: 10px;

            position: absolute;
            top: 50px;
            right: 0;

            width: 100%;

            span {
                display: block;

                &:hover {
                    background: rgb(224,222,231);
                    border-radius: 15px;
                }
            }
        }
    }   
</style>