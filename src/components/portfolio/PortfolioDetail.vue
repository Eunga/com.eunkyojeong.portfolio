<template>
  <div id="portfolio-detail">
      {{ work }}
  </div>
</template>

<script>
export default {
  name: 'PortfolioDetail',
  props: {
    work: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>


