<template>
  <div id="portfolio">
    <app-mask />
    <portfolio-list 
      v-on:showLockingUI="showLockingUI($event)"
      v-on:goPortfolioDetail="goPortfolioDetail($event)" />

    <div id="portfolio-bottom-mask"></div>

    <locking-ui 
      v-if="shouldShowLockingUI"
      v-on:doUnlock="doUnlock($event)" 
      :wantToShowProjectWork="lockedWorkWantToSee" />
  </div>
</template>

<script>
import Mask from "./Mask";
import PortfolioList from "@/components/portfolio/PortfolioList.vue";
import LockingUI from "@/components/LockingUI.vue";

export default {
  name: "Portfolio",
  components: {
    "portfolio-list": PortfolioList,
    "app-mask": Mask,
    "locking-ui": LockingUI
  },
  data: function() {
    return {
      shouldShowLockingUI: false,
      lockedWorkWantToSee: null,
      tempLockingCallback: null
    };
  },
  methods: {
    doUnlock(isUnlocked) {
      if (this.tempLockingCallback != null) {
        this.tempLockingCallback(isUnlocked)
        this.tempLockingCallback = null
        this.shouldShowLockingUI = false
      }
    },
    goPortfolioDetail(work) {
      $("#portfolio").addClass("transition");
    },
    showLockingUI(event) {
      this.tempLockingCallback = event.callback
      this.lockedWorkWantToSee = event.work
      this.shouldShowLockingUI = true
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
#portfolio {
  position: relative;
  margin: 0 auto;
  padding: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  height: calc(100vh - 120px);
}

#portfolio-bottom-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 100%;
}

#portfolio-list > ul {
  list-style: none;
  height: 100%;
  white-space: nowrap;
  position: relative;
}

#portfolio-timer-progressbar {
  position: absolute;
  height: 10px;
  width: 100%;
  background-color: white;
  bottom: 0px;
  border: 1px solid black;
}

#portfolio-timer-progress {
  width: 0%;
  background-color: #4a90e2;
  height: 100%;
  border-color: #4a90e2;
}

/* Media Queries */
@media screen and (max-width: 767px) {
  #portfolio {
    height: 100%;
    height: calc(var(--vh, 1vh) * 100);
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #portfolio {
    height: calc(var(--vh, 1vh) * 100);
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #portfolio {
    height: calc(100vh - 80px);
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  #portfolio {
    height: calc(100vh - 120px);
  }
}

@media screen and (min-width: 1777px) {
  #portfolio {
    height: calc(100vh - 120px);
  }
}
</style>
