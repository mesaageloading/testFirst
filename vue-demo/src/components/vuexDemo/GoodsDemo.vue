<template>
  <div class="page">
    <shopping-car ></shopping-car>
    <ul>
      <goods-item ></goods-item>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import GoodsItem from '@/components/VuexDemo/GoodsItem'
import ShoppingCar from '@/components/VuexDemo/ShoppingCar'
export default {
  data () {
    return {
    }
  },
  components: {
    GoodsItem,
    ShoppingCar
  },
  methods: {
  }
}
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
    width: 280px;
    border: 1px solid black;
  }
</style>
