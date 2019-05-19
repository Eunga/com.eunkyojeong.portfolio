<template>
    <div class="portfolio-item-detail row">
        <div class="col-md-6">
            <strong>Overview</strong><br/>
            {{ work.overview }}
        </div>

        <div class="col-md-3">
            
        </div>

        <div class="col-md-3">
            Date December 2018 <br/>
            Role Product Designer
        </div>

        
    </div>
</template>

<script>
export default {
    name: 'PortfolioItemDetail',
    props: {
    work: {
      type: Object,
      required: true
    }
  },

}
</script>

<style>

</style>

