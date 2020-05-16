<template>
  <div id="portfolio-list" class="carousel slide" data-interval="false" data-ride="carousel">
    <!-- Carousel !! -->
    <div v-if="works.length" class="portfolio-carousel carousel-inner">
      <portfolio-item
        v-on:goPortfolioDetail="goPortfolioDetail($event)"
        v-for="work in works"
        v-bind:work="work"
        v-bind:isDetail="false"
        v-bind:key="work.id"
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
      barInterval: null,
      isOnMoving: false
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
        let percent = 0;
        const $bar = $("#portfolio-carousel-progressbar");
        const $crsl = $("#portfolio-list");

        function progressBarCarousel() {
          $bar.css({
            width: percent + "%"
          });
          percent = percent + 1;
          if (percent > 110) {
            if (!_this.isOnMoving) {
              $crsl.carousel("next");
            }
            // percent = 0;
          }
        }

        _this.barInterval = setInterval(progressBarCarousel, 40);
        $crsl
          .carousel({ 
            interval: false, pause: true 
          })
          .on("slid.bs.carousel", function() {
            // 다음 슬라이드 보일 때마다 호출 됨. 프로그레스바 초기화.
            percent = 0;
          });
        
        if (carouselBehavior.shouldPauseWhenHover) {
          $crsl.hover(
            function() {
              clearInterval(_this.barInterval);
            },
            function() {
              _this.barInterval = setInterval(progressBarCarousel, 30);
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
    askToUnlockTheProjectIfItIsLockedProject(work, callback) {
      if (work.isLockedProject && !work.isUnlocked) {
          if (prompt("비밀번호를 입력해주세요.") == work.unlockedInfo.password) {  
            work.isUnlocked = true;
            
            callback()
          } else {
            this.askToUnlockTheProjectIfItIsLockedProject(work, callback)
          }
      }
    },
    mouseWheelEventForCarousel(e) {
      if (this.isOnMoving) {
        return;
      }

      const wheelDelta = e.deltaY;
      const $crsl = $("#portfolio-list");
      if (wheelDelta > 50) {
        $crsl.carousel("next");
      } else if (wheelDelta < -50) {
        $crsl.carousel("prev");
      }
      e.stopPropagation();
    },
    goPortfolioDetail(work) {
      if (work.isLockedProject && !work.isUnlocked) {
        this.askToUnlockTheProjectIfItIsLockedProject(work, () => { this.goPortfolioDetail(work) });
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
