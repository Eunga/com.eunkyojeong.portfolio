<template>
  <div id="portfolio-detail">
    <div class="portfolio-meta">
      <portfolio-item
        v-bind:isDetail="true"
        v-bind:work="work()"
        v-bind:key="work.id"
      />
    </div>
    <div class="portfolio-detail-info">
      <portfolio-item-detail
        v-bind:work="work()"
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
  watch: {
    $route (to, from) {
      const work = this.getCurrentWorkFromPath(to.path);
      this.commitCurrentWorkToStore(work);
    }
  },
  mounted() {
    $('#header').addClass('hide');
    const path = this.$route.path; // /portfolio/${work.path}
    const work = this.getCurrentWorkFromPath(path);
    this.commitCurrentWorkToStore(work);
  },
  methods: {
    work() {
      const currentWork = this.$store.getters.currentWork;
      return currentWork;
    },
    getCurrentWorkFromPath(path) {
      const before = this.$store.getters.currentWork;
      const work = this.$store.getters.works.filter(work => {
        return `/portfolio/${work.path}` == path;
      });

      return work[0];
    },
    commitCurrentWorkToStore(work) {
      this.$store.commit('changeCurrentWorkIdWithWork', work);
    }
  }
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
