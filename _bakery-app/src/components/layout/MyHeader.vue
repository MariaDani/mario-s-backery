<template>
    <div class="header">
        <router-link :to="{ name: 'MainPage' }">
            <img src="../../assets/images/logo.png" alt="">
        </router-link>
        <div class="header__search">
            <input 
                type="text"
                class="search__field"
                placeholder="search a bun"
                v-model="searchValue"
            >
            <div class="search__buttons">
                <button class="search__button">
                    <i 
                        class="material-icons"
                        @click="searchItem(searchValue)"
                    >search</i>
                </button>
                <button class="search__button">
                    <i 
                        class="material-icons"
                        @click="clearSearchField"
                    >clear</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'MyHeader',

    data() {
        return {
            searchValue: '',
        }
    },

    computed: {
        ...mapGetters([
            'SEARCH_VALUE'
        ])
    },

    methods: {
        ...mapActions([
            'SET_SEARCH_VALUE'
        ]),

        searchItem(value) {
            this.SET_SEARCH_VALUE(value);
            if(this.$route.path !== '/catalogue') {
                this.$router.push('/catalogue');
            }
        },

        clearSearchField() {
            this.searchValue = '';
            this.SET_SEARCH_VALUE();
            if(this.$route.path !== '/catalogue') {
                this.$router.push('/catalogue');
            }
        }
    }
}
</script>

<style lang="scss">

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    border-bottom: 1px solid rgba(224, 222, 231, 0.40);

    img {
        width: 200px;
        border-right: 1px solid rgba(224, 222, 231, 0.40);
    }
}

input.search__field {
    color: rgba(76,65,116,255);
    width: 250px;
    height: 25px;
}

.search__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    position: absolute;
    right: 5px;
    top: 42px;
}

.search__button:first-child {
    padding-right: 0;
    padding-left: 2px;
}

button.search__button {
    background: transparent;
    border: none;
    color: rgb(110,102,142);

    i {
        border-left: 1px solid rgb(139,132,165);
        cursor: pointer;
    }
}

</style>