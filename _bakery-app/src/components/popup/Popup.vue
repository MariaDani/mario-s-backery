<template>
    <div class="popup-wrapper" ref="popup_wrapper">
        <div class="popup">
            <div class="popup__header">
                <span>
                    <i 
                        class="material-icons"
                        @click="closePopup"
                    >close</i>
                </span>
            </div>
            <div class="popup__content">
                <slot></slot>
            </div>
            <div class="popup__footer">
                <button 
                    class="submit-btn btn"
                    @click="rightBtnAction"
                >{{rightBtnTitle}}</button>
                <!--
                <button 
                    class="close-modal-btn btn"
                    @click="closePopup"
                >Close</button>
                -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popup',
    props: {
        

        rightBtnTitle: {
            type: String,
            default: 'OK'
        }
    },

    data() {
        return {

        }
    },

    methods: {
        closePopup() {
            this.$emit('closePopup')
        },

        rightBtnAction() {
            this.$emit('rightBtnAction');
        }
    },

    mounted() {
        document.addEventListener('click', item => {
            if(item.target === this.$refs['popup_wrapper']) {
                this.closePopup();
            }
        })
    }
}
</script>

<style lang="scss">

.popup-wrapper {
    background: rgba(64, 64, 64, .4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
}

.popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 17px 0 rgb(224,222,231);
    z-index: 10;

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    &__header {
        i {
            position: relative;
            top: 5px;
            left: 180px;
        }
    }

    &__content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}

.submit-btn {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
}

</style>

