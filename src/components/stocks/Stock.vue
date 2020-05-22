<template>
  <div class="col-md-4 col-sm-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>( Price: {{ stock.price | currency }} )</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" v-model="quantity" :class="{danger: insufficientFunds}"
          class="form-control" placeholder="Quantity">
        </div>
        <div class="pull-right">
          <button @click="buyStock" class="btn btn-success" 
          :disabled="insufficientFunds || quantity <= 0 || !Number">
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
        funds() {
          return this.$store.getters.funds;
        },
        insufficientFunds() {
          return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        // console.log(order);
        this.$store.dispatch('buyStock',order)
        this.quantity = 0;
      }
    }
}
</script>


<style scoped>


input:focus,
input:hover, 
input:active  {
  border: 1px solid #6dc66d;
}

.danger:active,
.danger:focus {
  border: 1px solid #ce6a6a;
}

</style>
