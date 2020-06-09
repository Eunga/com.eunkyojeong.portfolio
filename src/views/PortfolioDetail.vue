<template>
  <div id="portfolio-detail">
    <app-mask />

    <div id="portfolio-meta">
      <portfolio-item v-bind:isDetail="true" v-bind:work="work()" v-bind:key="work.id" />
    </div>
    <div class="portfolio-detail-info">
      <portfolio-item-detail 
        v-bind:work="work()" v-bind:key="work.id" 
        v-if="showProjectDetails" />

    </div>

    <div id="portfolio-detail-mask"></div>

    <locking-ui 
      v-if="shouldShowLockingUI"
      v-on:doUnlock="doUnlock($event)" 
      :wantToShowProjectWork="lockedWorkWantToSee" />
  </div>
</template>

<script>

import Mask from "./Mask";
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
import PortfolioItemDetail from "@/components/portfolio/PortfolioItemDetail.vue";
import LockingUI from "@/components/LockingUI.vue";

export default {
  name: "PortfolioDetail",
  components: {
    "portfolio-item": PortfolioItem,
    "portfolio-item-detail": PortfolioItemDetail,
    "app-mask": Mask,
    "locking-ui": LockingUI
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
      isFirstLoad: false,
      showProjectDetails: true, // default

      shouldShowLockingUI: false,
      lockedWorkWantToSee: null,
      tempLockingCallback: null,
    };
  },
  updated() {
    const path = this.$route.path;
    const work = this.$store.getters.workFromPath(path);
    
    if (work.isLockedProject && !work.isUnlocked) {
      this.showProjectDetails = false
      $("#footer").hide();
      this.askToUnlockTheProjectIfItIsLockedProject(work, (isSuccess) => {
        work.isUnlocked = isSuccess
        this.showProjectDetails = isSuccess

        if (!isSuccess) {
          window.location.href = "/";
        } else {
          gtag('event', `UnlockSuccess|${work.name}`, {'event_category': 'Lock', 'event_label': 'Move to the page directly. + Unlock Success'});
          $("#footer").show();
        }
      });
    }

    $("#portfolio-detail-mask").css({
      opacity: 1,
      "z-index": 1000
    });

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
    $("#portfolio-detail-mask").css({
      opacity: 0,
      "z-index": -1000
    });

    const path = this.$route.path;
    const work = this.$store.getters.workFromPath(path);
    this.commitCurrentWorkToStore(work);

    if (work.isLockedProject && !work.isUnlocked) {
      this.showProjectDetails = false;
    } else {
      this.showProjectDetails = true;
    }
  },
  methods: {
    doUnlock(isUnlocked) {
      if (this.tempLockingCallback != null) {
        this.tempLockingCallback(isUnlocked);
        this.tempLockingCallback = null;
        this.shouldShowLockingUI = false;
      }
    },
    askToUnlockTheProjectIfItIsLockedProject(work, callback) {
      if (work.isLockedProject && !work.isUnlocked) {
        this.tempLockingCallback = callback;
        this.lockedWorkWantToSee = work;
        this.shouldShowLockingUI = true;
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
  min-height: 2000px;
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
