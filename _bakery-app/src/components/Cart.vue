<template>
    
    <div class="cart">
        <router-link :to="{name: 'catalogue'}">
            <div class="cart__linkBtn">
                <i class="material-icons">home</i>
            </div>
        </router-link>
        <span v-if="!CART.length" class="cart-empty">You haven't chosen any buns yet :(</span>
        <cart-item 
            v-for="(item, index) in CART"
            :key="item.article"
            :cartItemData="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />

        <div 
            class="cart__total"
            v-if="CART.length"
        >
            <span class="cart__total-name">total :</span>
            <span>{{ cartTotal }} Р.</span>
        </div>
    </div>

</template>

<script>

import CartItem from './CartItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Cart',
    components: { CartItem },
    props: {
        cartData: {
            type: Array,
            default() {
                return []
            }
        }
    },

    data() {
        return {

        }
    },

    computed: {
        ...mapGetters([
            'CART'
        ]),

        cartTotal() {
            let res = [];

            for (let item of this.CART) {
               res.push(item.price * item.quantity);
            }

            res = res.reduce((sum, el) => sum + el);

            return res.toFixed();
        }
    },

    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_ITEM',
            'DECREMENT_ITEM'
        ]),

        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        },

        increment(index) {
            this.INCREMENT_ITEM(index);
        },

        decrement(index) {
            this.DECREMENT_ITEM(index);
        }
    }
}

</script>

<style lang="scss" scoped>
//@import '../assets/styles/styles.scss';

.cart {
    color: rgb(91,80,127);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    padding-top: 20px;

        &-empty {
            font-size: 20px;
        }

    &__linkBtn {
        position: absolute;
        top: 120px;
        right: 10px;
        padding: 16px;

        background-color: rgb(91,80,127);
        color: rgb(224,222,231);
        border-radius: 50%;
        width: 40px;
        height: 40px;

        i {
            margin-top: 5px;
        }
    }

    &__total {
        position: fixed;
        top: 125px;
        left: 1450px;
        width: 300px;
        padding: 24px;
        display: flex;
        justify-content: center;
        background: rgb(224,222,231);
        opacity: 0.4;
        font-size: 20px;
        text-transform: uppercase;

        &-name {
            margin-right: 16px;
        }
    }
}
</style>
