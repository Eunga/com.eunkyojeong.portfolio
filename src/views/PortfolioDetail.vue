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

    <div id="portfolio-detail-mask">
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
  data: function() {
    return {
      isFirstLoad: false
    }
  },
  updated() {
    if (this.isFirstLoad) {
      $('#portfolio-detail-mask').css({
        opacity: 0,
        'z-index': -1000
      });
      this.isFirstLoad = false;
    } else {
      $('#portfolio-detail-mask').css({
        opacity: 1,
        'z-index': 1000
      });

      $('#portfolio-detail-mask').animate({
        opacity: 0,
        'z-index': -1000
      }, 2000);
    }
  },
  mounted() {
    this.isFirstLoad = true;
    $('#portfolio-detail-mask').css({
      opacity: 0,
      'z-index': -1000
    });

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
  position: relative;
  width:100%;
}

.portfolio-meta, .portfolio-detail-info {
  position: relative;
  background-color: white;
}
.portfolio-meta {
  height: 640px;
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

#portfolio-detail-mask {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: white;
  z-index: 1000; /* header 까지 가림. */
  /* transition: all 1s ease-in-out; */
}
</style>
