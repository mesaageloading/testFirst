<template>
  <div class="page">
    <h1>axios demo</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  created () {
    this.axios.get('https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list')
      .then((res) => console.log(res))
  }
}
</script>

<style scoped>
</style>
