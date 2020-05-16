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
    $("#portfolio-detail-mask").css({
      opacity: 1,
      "z-index": 1000
    });

    const work = this.work();
    if (work.isLockedProject && !work.isUnlocked) {
        this.askToUnlockTheProjectIfItIsLockedProject(work);
        return;
    }

    setTimeout(() => {
      $("#portfolio-detail-mask").animate({
          opacity: 0,
          "z-index": -1000
        },
        300
      );
    }, 300);
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

    if (work.isLockedProject && !work.isUnlocked) {
        this.askToUnlockTheProjectIfItIsLockedProject(work);
        return;
    }
  },
  methods: {
    askToUnlockTheProjectIfItIsLockedProject(work) {
      if (work.isLockedProject && !work.isUnlocked) {
          if (prompt("비밀번호를 입력해주세요.") == work.unlockedInfo.password) {  
            work.isUnlocked = true;
            setTimeout(() => {
              $("#portfolio-detail-mask").animate({
                  opacity: 0,
                  "z-index": -1000
                },
                300
              );
            }, 300);
          } else {
            this.askToUnlockTheProjectIfItIsLockedProject(work)
          }
      }
    },
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

@media (max-width: 767px) {
  #portfolio-meta {
    height: 480px !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #portfolio-meta {
    height: 736px;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #portfolio-meta {
    height: 562px;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  #portfolio-meta {
    height: 602px;
  }
}


</style>
