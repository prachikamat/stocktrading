<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Officiis magnam, officia assumenda cumque ea molestias quas iste numquam! Omnis, minima. 
      Odit adipisci ullam unde totam nobis tenetur omnis ipsum incidunt?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Officiis magnam, officia assumenda cumque ea molestias quas iste numquam! Omnis, minima. 
      Odit adipisci ullam unde totam nobis tenetur omnis ipsum incidunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta atque facilis quia. 
      Magni quae asperiores doloribus esse, eum quam quia voluptates necessitatibus quidem. 
      Suscipit illum voluptatem sit maxime dolores.
    </p>
    <h5>You may Save & Load your Data</h5>
    <br>
    <h5>Click on 'End Day' to begin a New day!</h5>
    <hr>
    <h3>Your Funds: {{ funds | currency }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>


<style scoped>
  * {
    color: #50a6b4;
  }
</style>
