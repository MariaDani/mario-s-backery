<template>
    
    <div class="catalogue-item">

        <popup 
            v-if="isPopupVisible"
            @closePopup="closePopup"
            rightBtnTitle="Add to cart"
            @rightBtnAction='addToCart'
        >
            <p class="catalogue-item__name">{{productData.name}}</p>
            <img 
            class="catalogue-item__img" 
            :src="require('../assets/images/menu/' + productData.image)" 
            alt="img" 
            >
            <div>
                <p class="catalogue-item__price">Price: {{toFixPrice}}</p>
                <p class="catalogue-item__category">Category: {{productData.category}}</p>
                <p class="catalogue-item__description">Description: {{productData.description}}</p>
            </div>
        </popup>

        <p class="catalogue-item__name">{{productData.name}}</p>
        <img 
            class="catalogue-item__img" 
            :src="require('../assets/images/menu/' + productData.image)" 
            alt="img" 
        >
        <p class="catalogue-item__price">Price: {{toFixPrice}}</p>
        <button
            class="catalogue-item__show-info-btn btn"
            @click="showPopupInfo"
        >Show info</button>
        <button 
            class="catalogue-item__cart-btn btn"
            @click="addToCart"
        >Add to cart</button>
    </div>

</template>

<script>
import Popup from './popup/Popup.vue';

export default {
    name: 'CatalogueItem',
    components: { Popup, },
    props: {
        productData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            isPopupVisible: false,
        }
    },

    computed: {
        toFixPrice() {
                return parseFloat(this.productData.price).toFixed() + ' P.';
            }
    },

    methods: {
        addToCart() {
            this.$emit('addToCart', this.productData)
        },

        showPopupInfo() {
            this.isPopupVisible = true;
        },

        closePopup() {
            this.isPopupVisible = false;
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.catalogue-item {
    flex-basis: 30%;
    box-shadow: 0 0 8px 0 rgb(224,222,231);
    padding: $padding;
    margin-bottom: $margin*2;
    text-align: center;

    &__name {
        font-size: 25px;
    }

    &__price {
        font-size: 20px;
    }

    &__img {
        width: 300px;
        height: 200px;
    }

    &__show-info-btn {
        margin-right: 5px;
        border-radius: 5px;
    }

    &__cart-btn {
        border-radius: 5px;
    }
}

</style>