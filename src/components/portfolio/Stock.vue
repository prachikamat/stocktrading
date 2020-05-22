<template>
  <div class="col-md-4 col-sm-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>( Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }} )</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" v-model="quantity" class="form-control" placeholder="Quantity" :class="{danger: insufficientQty}">
        </div>
        <div class="pull-right">
          <button @click="sellStock" :disabled="insufficientQty || quantity <= 0 || !Number" class="btn btn-info">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
        insufficientQty() {
          return this.quantity < this.stock.quantity;
        }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    }
}
</script>


<style scoped>

input:focus,
input:hover, 
input:active  {
  border: 1px solid #66a5ee
}


.danger:active,
.danger:focus {
  border: 1px solid #ce6a6a;
}


</style>
