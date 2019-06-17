<template>
  <div id="portfolio-detail">
    <div class="portfolio-meta">
      <portfolio-item
        v-bind:isDetail="true"
        v-bind:work="work"
        v-bind:key="work.id"
      />
    </div>
    <div class="portfolio-detail-info">
      <portfolio-item-detail
        v-bind:work="work"
        v-bind:key="work.id"
        />
    </div>
  </div>
</template>

<script>
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
import PortfolioItemDetail from "@/components/portfolio/PortfolioItemDetail.vue";

export default {
  name: 'PortfolioDetail',
  components: {
    "portfolio-item": PortfolioItem,
    "portfolio-item-detail": PortfolioItemDetail
  },
  computed: {
    work() {
      return this.$store.getters.currentWork;
    }
  },
  mounted() {
    console.log(`path: ${this.$route.path}`);
    const path = this.$route.path;
    
  },
  watch: {
    $route (to, from) {
        // console.log(to);
        // console.log(from);
    }
  },
  // computed: {
  //   work() {
      // var wholePath = this.$route.path;
      // var paths = wholePath.split('/');
      // var path = paths[paths.length - 1];

  //     console.log(`work: ${this.work}`);
  //     var work = null;
  //     this.$store.getters.works.forEach(element => {
  //       if (element.path == path) {
  //         work = element;
  //         return;
  //       }
  //     });

  //     return work;
  //   },
  // },
};
</script>

<style>
#portfolio-detail {
  width:100%;
}

.portfolio-meta, .portfolio-detail-info {
  position: relative;
  background-color: white;
}
.portfolio-meta {
  height: 640px;

  /** FIXME **/
  height: 544px;
}

#portfolio-detail .portfolio-item-content {
  cursor: initial;
}

.portfolio-detail-info {
  transition: all .3s ease;
}

.fade-leave-active .portfolio-detail-info {
  top: 500px;
  opacity: 0;
}
</style>
