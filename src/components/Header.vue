<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/" active-class="active" exact>
          STOCKs
        </router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
        <!-- <router-link class="nav-item" tag="li" to="/" active-class="active" exact>
          <a>Home</a>
        </router-link> -->
        <router-link class="nav-item" tag="li" to="/stocks" active-class="active">
          <a>Stocks</a>
        </router-link>
        <router-link class="nav-item" tag="li" to="/portfolio" active-class="active">
          <a>Portfolio</a>
        </router-link>
      </ul>
      <h5 class="navbar-text navbar-right"> Funds: {{ funds | currency }}</h5>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a @click="endDay">End day</a>
        </li>
        <li class="dropdown" @click="dropdownOpen = !dropdownOpen" :class="{ open: dropdownOpen}">
          <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" role="button"> Save & Load <span class="caret"></span> </a>
          <ul class="dropdown-menu">
            <li><a @click="saveData">Save data</a></li>
            <li><a @click="loadData">Load data</a></li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dropdownOpen:false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks : this.$store.getters.stocks
      };
      // console.log(data);
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>


<style scoped>

.navbar-text, a {
  color: #26ccd2;
}


a:hover,
a:active,
a:focus {
  background-color: rgb(178, 250, 168) !important;
}

.navbar-nav .open .dropdown-toggle {
    background-color: rgb(178, 250, 168) !important;
}

.navbar, 
.navbar-nav .open .dropdown-menu {
  background-color: rgb(227, 253, 228);
}


</style>
