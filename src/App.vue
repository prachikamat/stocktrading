<template>
  <div class="container-fluid">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  },
}
</script>


<style>

  *, 
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    padding: 30px;
  }

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-in {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }  
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
