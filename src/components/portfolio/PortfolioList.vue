<template>
  <div id="portfolio-list" data-id="0" class="carousel slide" data-interval="false" data-ride="carousel">
    <!-- Carousel !! -->
    <div v-if="works.length" class="portfolio-carousel carousel-inner">
      <portfolio-item
        :work-id="work.id"
        :work-path="work.path"
        v-on:goPortfolioDetail="goPortfolioDetail($event)"
        v-for="work in works"
        v-bind:work="work"
        v-bind:isDetail="false"
        v-bind:key="work.id"

        v-if="shouldRenderIt"
      />
    </div>

    <div id="portfolio-carousel-progressbar-wrapper">
      <div id="portfolio-carousel-progressbar"></div>
    </div>
  </div>
</template>

<script>

import PortfolioItem from "./PortfolioItem.vue";

const carouselBehavior = {
  isCarouselActive: true,
  shouldPauseWhenHover: false,
  shouldScrollMoveCarousel: true
};

export default {
  name: "PortfolioList",
  components: {
    "portfolio-item": PortfolioItem
  },
  data: function() {
    return {
      percent: 0,
      barInterval: null,
      isOnMoving: false,
      shouldRenderIt: true,
    }
  },
  mounted() {
    $('#portfolio-carousel-progressbar-wrapper').css({
      opacity: 0
    });
    $('#portfolio-carousel-progressbar-wrapper').animate({
      'opacity': 1
    }, 400);

    const _this = this;
    $(document).ready(function() {
      if (carouselBehavior.isCarouselActive) {
        const $crsl = $("#portfolio-list");
        
        const originalInterval = _this.getCurrentCarouselInvervalId()
        if (originalInterval != 0) {
          clearInterval(originalInterval);
        }

        if (_this.barInterval != null) {
          clearInterval(_this.barInterval);
        }
        _this.barInterval = setInterval(_this.progressBarCarousel, 30);
        _this.saveCarouselInvervalId(_this.barInterval);

        $crsl
          .carousel({ 
            interval: false, pause: true 
          })
          .on("slid.bs.carousel", function() {
            _this.percent = 0;
          });
        
        if (carouselBehavior.shouldPauseWhenHover) {
          $crsl.hover(
            function() {
              clearInterval(_this.barInterval);
            },
            function() {
              if (_this.barInterval != null) {
                clearInterval(_this.barInterval);
              }
              _this.barInterval = setInterval(_this.progressBarCarousel, 30);
              _this.saveCarouselInvervalId(_this.barInterval);
            }
          );
        }
      }

      if (carouselBehavior.shouldScrollMoveCarousel) {
        window.addEventListener("mousewheel", _this.mouseWheelEventForCarousel);
      }
    });
  },
  computed: {
    works() {
      return this.$store.getters.works;
    }
  },
  methods: {
    forceChildRerender(callback) {
      this.shouldRenderIt = false;
      this.$nextTick(() => {
          // Add the component back in
          this.shouldRenderIt = true;
          this.$nextTick(() => {
            callback();
          });
        });
    },
    saveCarouselInvervalId(carouselId) {
      this.$store.commit("saveCarouselInvervalId", carouselId);
    },
    getCurrentCarouselInvervalId() {
      return this.$store.getters.currentCarouselIntervalId;
    },
    progressBarCarousel() {
      const $bar = $("#portfolio-carousel-progressbar");
      const $crsl = $("#portfolio-list");

      $bar.css({
        width: this.percent + "%"
      });
      this.percent = this.percent + 1;
      if (this.percent > 110) {
        if (!this.isOnMoving) {
          $crsl.carousel("next");
        }
      }
    },
    askToUnlockTheProjectIfItIsLockedProject(work, callback) {
      this.$emit('showLockingUI', {
        work: work, 
        callback: (isSuccess) => {
          callback(isSuccess)
        }
      });
    },
    mouseWheelEventForCarousel(e) {
      e.stopPropagation();
      if (this.isOnMoving) {
        return;
      }

      const wheelDelta = e.deltaY;
      const $crsl = $("#portfolio-list");
      if (wheelDelta > 30) {
        $crsl.carousel("next");
      } else if (wheelDelta < -30) {
        $crsl.carousel("prev");
      }
    },

    goPortfolioDetail(work) {
      if (work.isLockedProject && !work.isUnlocked) {
        // stop carousel
        clearInterval(this.barInterval);
        
        this.askToUnlockTheProjectIfItIsLockedProject(work, (isSuccess) => { 
          work.isUnlocked = isSuccess

          if (isSuccess) {
            gtag('event', `PortfolioDetail|${work.name}`, {'event_category': 'Page', 'event_label': 'Move to the page from the home. + Unlock Success'});
            gtag('event', `UnlockSuccess|${work.name}`, {'event_category': 'Lock', 'event_label': 'Move to the page from the home. + Unlock Success'});

            const _this = this;
            this.forceChildRerender(function() {
              _this.goPortfolioDetail(work);
            });
            
          } else {
            // resume carousel
            if (this.barInterval != null) {
              clearInterval(this.barInterval);
            }
            this.barInterval = setInterval(this.progressBarCarousel, 30);
            this.saveCarouselInvervalId(this.barInterval);
          }
        });

        return;
      }

      this.$emit("goPortfolioDetail", work);
      
      this.isOnMoving = true;
      
      const $crsl = $("#portfolio-list");
      $crsl.carousel('pause');
      window.removeEventListener("mousewheel", this.mouseWheelEventForCarousel);
      clearInterval(this.barInterval);
      
      this.$store.commit("changeCurrentWorkId", work.id);
      gtag('event', `PortfolioDetail|${work.name}`, {'event_category': 'Page', 'event_label': 'Move to the page from the home.'})
      this.$router.push({ path: `/portfolio/${work.path}` });
    },
    next() {
      $("#portfolio-list").carousel("next");
    },
    previous() {
      $("#portfolio-list").carousel("prev");
    }
  }
};
</script>

<style>
#portfolio-carousel-progressbar-wrapper {
  height: 10px;
  width: 100%;
  padding: 0px 120px;
  position: relative;
  top: -10px;
  z-index: 10;
}
#portfolio-carousel-progressbar {
  height: 100%;
  width: 0%;
  width: 100%;
  position: relative;
  background-color: #000000;
  opacity: 0.2;
}

#portfolio-list {
  height: 100%;
  width: 100%;
}

.portfolio-carousel {
  width: 100%;
  height: 100%;
}

.carousel-control-next {
  z-index: 100;
}

.list .portfolio-item-brief {
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.list.portfolio-item.active .portfolio-item-brief {
  opacity: 1;
} 

.list .portfolio-item-stuff {
  transform: translateX(50px);
  opacity: 0;
  transition-property: height, width, opacity, transform;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.mobileAnim .list .portfolio-item-stuff {
  transition-duration: .2s;
}

.list.portfolio-item.active .portfolio-item-stuff {
  transform: translateX(0px);
  opacity: 1;
} 

/* Media Queries */
@media screen and (max-width: 767px) {
  #portfolio-carousel-progressbar-wrapper {
    padding: 0px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #portfolio-carousel-progressbar-wrapper {
    padding: 0px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #portfolio-carousel-progressbar-wrapper {
    padding: 0px 80px;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  #portfolio-carousel-progressbar-wrapper {
    padding: 0px 120px;
  }
}

@media screen and (min-width: 1777px) {
  #portfolio-carousel-progressbar-wrapper {
    padding: 0px 120px;
  }
}
</style>
