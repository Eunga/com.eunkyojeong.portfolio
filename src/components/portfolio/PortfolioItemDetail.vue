<template>
    <div class="portfolio-item-detail row">
        <div class="col-md-12">
            <component :is="comp"/>
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
        },
    },
    computed: {
        name: function() {
            return this.work.name;
        },
        comp () {
            return () => import(`@/components/works/${this.name}.vue`)
        }
    }
}
</script>

<style>

</style>

