<template>

    <div class="cart-item">
        <img 
            :src="require('../assets/images/menu/' + cartItemData.image)" 
            alt="img"
            class="cart-item__img"
        >
        <div class="cart-item__info">
            <p>{{cartItemData.name}}</p>
            <p>{{toFixPrice}}</p>
            <p>{{cartItemData.article}}</p>
        </div>
        <div class="cart-item__quantity">
            <span>Кол-во:</span>
            <span class="quantity-button">
                <i 
                    class="material-icons" 
                    @click="incrementItem"
                >
                    add_circle_outline
                </i> 
            </span>
            <span>{{ cartItemData.quantity }}</span>
            <span class="quantity-button"> 
                <i 
                    class="material-icons" 
                    @click="decrementItem"
                >
                    remove_circle_outline
                </i> 
            </span>
        </div>
        <button class="remove-btn"> 
            <i 
                class="material-icons" 
                @click="deleteFromCart"
            >
                delete
            </i>
        </button>
    </div>
    
</template>

<script>

export default {
    name: 'CartItem',
    props: {
        cartItemData: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    data() {
        return {

        }
    },

    mounted() {
        this.cartItemData['quantity'] = 1;
    },

    computed: {
        toFixPrice() {
                return parseFloat(this.cartItemData.price).toFixed() + ' P.';
            }
    },

    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart');
        },

        incrementItem() {
            this.$emit('increment');
        },

        decrementItem() {
            this.$emit('decrement');
        }
    },
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    position: relative;
    top: 90px;
    left: 30px;

    max-width: 700px;
    height: 200px;

    box-shadow: 0 0 8px 0 rgb(224,222,231);
    padding: $padding*2;
    margin-bottom: $margin*2;
    text-align: center;

    &__img {
        max-width: 200px;
    }
}

.cart-item__quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    }

.quantity-button {
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    padding: $padding;

   color: rgb(91,80,127);
}

.remove-btn {
    color: rgb(91,80,127);
    border: none;
    background: transparent;
    cursor: pointer;
}

</style>