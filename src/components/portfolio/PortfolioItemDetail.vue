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
            try {
                const com = () => import(`@/components/works/${this.name}.vue`);
                console.log(com);
                return com;
            } catch (e) {
                console.log(e);
                return null;
            }
        }
    }
}
</script>

<style>

</style>

