<template>
  <div id="portfolio-list" class="carousel slide" data-interval="false" data-ride="carousel">

    <!-- Carousel !! -->
    <div v-if="works.length" class="portfolio-carousel carousel-inner">
      <portfolio-item
        v-on:goPortfolioDetail="goPortfolioDetail($event)"
        v-for="work in works"
        v-bind:work="work"
        v-bind:isDetail="false"
        v-bind:key="work.id"/>

      <div class="portfolio-item-list-padding portfolio-item-list-padding-left"></div>
      <div class="portfolio-item-list-padding portfolio-item-list-padding-right"></div>

    </div>
    <div id="portfolio-carousel-progressbar-wrapper">
      <div id="portfolio-carousel-progressbar"></div>
    </div>

    <div id="portfolio-item-content-mask"></div>
  </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue";


const carouselBehavior = {
  isCarouselActive: false,
  shouldPauseWhenHover: true,
  shouldScrollMoveCarousel: false
};

export default {
  name: "PortfolioList",
  components: {
    "portfolio-item": PortfolioItem
  },
  mounted() {

    $(document).ready(function() {
      if (carouselBehavior.isCarouselActive) {
        let percent = 0;
        const $bar = $('#portfolio-carousel-progressbar');
        const $crsl = $('#portfolio-list');

        function progressBarCarousel() {
          $bar.css({
            width: percent + '%'
          });
          percent = percent + 1;
          if (percent > 100) {
            percent = 0;
            $crsl.carousel('next');
          }
        }
  
        $crsl.carousel({interval: false, pause: true}).on('slid.bs.carousel', 
        function() {
          // 다음 슬라이드 보일 때마다 호출 됨. 프로그레스바 초기화.
          console.log("hello");
          percent = 0;
        });

        let barInterval = setInterval(progressBarCarousel, 40);

        if (carouselBehavior.shouldPauseWhenHover) {
          $crsl.hover(
            function() {
              clearInterval(barInterval);
            },
            function() {
              barInterval = setInterval(progressBarCarousel, 30);
          });
        }
      }

      if (carouselBehavior.shouldScrollMoveCarousel) {
        window.addEventListener('mousewheel', function(e) {
          const wheelDelta = e.deltaY;
          const $crsl = $('#portfolio-list');
          if (wheelDelta > 50) {
            $crsl.carousel('next');
          } else if (wheelDelta < -50) {
            $crsl.carousel('prev');
          }
          e.stopPropagation();
        });
      }
    });
  },
  computed: {
    works() {
      return this.$store.getters.works;
    },
  },
  methods: {
    goPortfolioDetail(work) {
      this.$emit("goPortfolioDetail", work);
    },
    next() {
      $('#portfolio-list').carousel('next');
    },
    previous() {
      $('#portfolio-list').carousel('prev');
    },
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
}
#portfolio-carousel-progressbar {
  height:100%;
  width:0%;
  width: 100%;
  position: relative;
  background-color: #000000;
  opacity: 0.2;
}
#portfolio-item-content-mask {
  transition: all 0.3 ease-in;
  height: 100vh;
}

.fade-leave-active #portfolio-item-content-mask {
  position: relative;
  top: 0;
}

#portfolio-list {
  height: 100%;
  width: 100%;
}

.portfolio-carousel {
  width: 100%;
  height: 100%;
  /* height: calc(100% - 10px); */
}

.carousel-control-next {
  z-index: 100;
}

/**
 * [Start] List <-> Detail 전환 시, "item-list-padding left & right" animation
 */
.portfolio-item-list-padding {
  position: absolute;
  width:120px;
  height:100%;
  z-index: 10;
  background-color: white;
}
.portfolio-item-list-padding-left {
  left:0;
}
.portfolio-item-list-padding-right {
  right:0;
}
.fade-leave-active .portfolio-item-list-padding-left {
  transform: translateX(-300px);
  transition-duration: .3s;
}
.fade-leave-active .portfolio-item-list-padding-right {
  transform: translateX(300px);
  transition-duration: .3s;
}
/**
 * [End] List <-> Detail 전환 시, "item-list-padding left & right" animation
 */

@media (max-width: 767px) {
  .portfolio-item-list-padding {
    display: none;
  }

  #portfolio-carousel-progressbar-wrapper {
    padding: 0px;
  }
}
</style>
