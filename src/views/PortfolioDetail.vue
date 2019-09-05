<template>
  <div id="portfolio-detail">
    <app-mask />

    <div id="portfolio-meta">
      <portfolio-item v-bind:isDetail="true" v-bind:work="work()" v-bind:key="work.id" />
    </div>
    <div class="portfolio-detail-info">
      <portfolio-item-detail v-bind:work="work()" v-bind:key="work.id" />
    </div>

    <div id="portfolio-detail-mask"></div>
  </div>
</template>

<script>
;

import Mask from "./Mask";
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
import PortfolioItemDetail from "@/components/portfolio/PortfolioItemDetail.vue";

export default {
  name: "PortfolioDetail",
  components: {
    "portfolio-item": PortfolioItem,
    "portfolio-item-detail": PortfolioItemDetail,
    "app-mask": Mask
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      const work = this.$store.getters.workFromPath(to.path);
      this.commitCurrentWorkToStore(work);
    }
  },
  data: function() {
    return {
      isFirstLoad: false
    };
  },
  updated() {
    if (this.isFirstLoad) {
      $("#portfolio-detail-mask").css({
        opacity: 0,
        "z-index": -1000
      });
      this.isFirstLoad = false;
    } else {
      $("#portfolio-detail-mask").css({
        opacity: 1,
        "z-index": 1000
      });

      $("#portfolio-detail-mask").animate(
        {
          opacity: 0,
          "z-index": -1000
        },
        2000
      );
    }
  },
  mounted() {
    this.isFirstLoad = true;
    $("#portfolio-detail-mask").css({
      opacity: 0,
      "z-index": -1000
    });

    const path = this.$route.path;
    const work = this.$store.getters.workFromPath(path);
    this.commitCurrentWorkToStore(work);
  },
  methods: {
    work() {
      const currentWork = this.$store.getters.currentWork;
      return currentWork;
    },
    commitCurrentWorkToStore(work) {
      this.$store.commit("changeCurrentWorkIdWithWork", work);
    }
  }
};
</script>

<style>
#portfolio-detail {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scrollbar-width: none;
}

#portfolio-detail::-webkit-scrollbar {
  display: none;
}

#portfolio-meta {
  height: 640px;
  transition: all 0.3s ease-in-out;
}

#portfolio-meta,
.portfolio-detail-info {
  position: relative;
  background-color: white;
}

#portfolio-detail .portfolio-item-content {
  cursor: initial;
}

.portfolio-detail-info {
  transition: all 0.3s ease-in-out;
  z-index: 10;
}

#portfolio-detail-mask {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: white;
  z-index: 1000; /* header 까지 가림. */
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #portfolio-meta {
    height: 736px;
    transition: all 0.3s ease-in-out;
  }
}


</style>
