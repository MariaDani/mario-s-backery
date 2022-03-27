<template>
    
    <div class="catalogue">
        <router-link :to="{name: 'cart', params: {cartData: CART}}">
            <div class="catalogue__linkBtn">
                <i class="material-icons">
                    local_grocery_store 
                </i>
                {{CART.length}}
            </div>
        </router-link>
        <div class="catalogue__filters">
            <my-select 
                :selectedOption="selectedOption"
                :options="categories"
                @select="sortByCategory"
            />

            <div class="filters__range-slider">
                <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    step="10"
                    v-model.number="minPrice"
                    @change="setSliders"
                >
                <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    step="10"
                    v-model.number="maxPrice"
                    @change="setSliders"
                >
            </div>
            <div class="range-slider__values">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>
        <h1>Bun's menu</h1>
        <div class="catalogue__list">
            <catalogue-item 
                v-for="product of filterProducts"
                :key="product.article"
                :productData="product"
                @addToCart="addToCart"
            />
        </div>
    </div>

</template>

<script>

import CatalogueItem from './CatalogueItem.vue';
import MySelect from './MySelect.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Catalogue',
    components: { CatalogueItem, MySelect},

    data() {
        return {
            categories: [
                {name: 'Croissants', value: 'croissants'},
                {name: 'Cinnamon buns', value: 'buns'},
                {name: 'Pretzels', value: 'pretzels'},
                {name: 'Deserts', value: 'deserts'},
                {name: 'Bread', value: 'bread'},
                {name: 'All', value: 'all'}
            ],

            selectedOption: 'All',
            sortedItems: [],
            
            minPrice: 0,
            maxPrice: 500,
        }
    },

    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'SEARCH_VALUE'
        ]),

        filterProducts() {
            if(this.sortedItems.length) {
                return this.sortedItems
            } else {
                return this.PRODUCTS;
            }
        }
    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),

        addToCart(data) {
            this.ADD_TO_CART(data);
        },

        sortByCategory(category) {
            this.sortedItems = [...this.PRODUCTS];
            this.sortedItems = this.sortedItems.filter(item => {
                return item.price >= this.minPrice && item.price <= this.maxPrice;
            })

            if(category) {
                this.selectedOption = category.name;
                this.sortedItems = this.sortedItems.filter(el => {
                    return el.category === category.name;
                });
            }
            /*
            this.PRODUCTS.map(item => {
                if (item.category === category.name) {
                    this.sortedItems.push(item);
                };
            })
            this.selectedOption = category.name; */
        },

        setSliders() {
            if(this.minPrice > this.maxPrice) {
                let tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp;
            }
            this.sortByCategory();
        },

        sortBySearch(value) {
            this.sortedItems = [...this.PRODUCTS];
            if(value) {
                this.sortedItems = this.sortedItems.filter(item => {
                    return item.name.toLowerCase().includes(value.toLowerCase());
                })
            } else {
                this.sortedItems = this.PRODUCTS;
            }
        }
    },

    mounted() {
        this.GET_PRODUCTS_FROM_API();
        this.sortByCategory();
        this.sortBySearch(this.SEARCH_VALUE);
    },

    watch: {
        SEARCH_VALUE() {
            this.sortBySearch(this.SEARCH_VALUE);
        }
    }
}

</script>

<style lang="scss" scoped>
//@import '../assets/styles/styles.scss';

.catalogue {
    color: rgb(91,80,127);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;

    h1 {
        margin-top: 50px;
        margin-bottom: 50px;

        font-size: 40px;
        font-weight: normal;
    }

    &__filters {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;

        &__range-slider {
            width: 200px;
            margin: auto 16px;
            text-align: center;

            svg, input[type=range] {
                position: absolute;
                left: 0;
                bottom: 0;

                ::-webkit-slider-thumb {
                    z-index: 2;
                    position: relative;
                    top: 2px;
                    margin-top: -7px;
                }
            }
        }

    }

    &__list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    &__linkBtn {
        position: absolute;
        top: 120px;
        right: 10px;
        padding: 15px;

        background-color: rgb(91,80,127);
        color: rgb(224,222,231);
        border-radius: 50%;
        width: 40px;
        height: 40px;

        i {
            margin-top: 5px;
        }
    }
}

.filters__range-slider {
    position: relative;
    top: 35px;
    left: 50px;
}

.range-slider__values {
    color: rgb(91,80,127);

    display: flex;
    flex-direction: row;

    position: relative;
    top: 45px;
    left: -165px;

    :first-child {
        margin-right: 80px;
    }
}

</style>

//this.$store.state.products = getter PRODUCTS
