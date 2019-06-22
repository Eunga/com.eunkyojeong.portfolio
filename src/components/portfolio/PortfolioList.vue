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

      <div class="portfolio-item-background-padding portfolio-item-background-padding-left"></div>
      <div class="portfolio-item-background-padding portfolio-item-background-padding-right"></div>

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
  shouldPauseWhenHover: false,
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
  
        $crsl.carousel({
          interval: false,
          pause: true
        }).on('slid.bs.carousel', function() {});

        const barInterval = setInterval(progressBarCarousel, 40);

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
  top: -10px;
  position: relative;
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
}

.carousel-control-next {
  z-index: 100;
}

.navLink {
  z-index: 1;
}

.portfolio-item-background-padding {
  position: absolute;
  width:120px;
  height:100%;
  z-index: 10;
  background-color: white;
}

.portfolio-item-background-padding-left {
  left:0;
}

.portfolio-item-background-padding-right {
  right:0;
}

.fade-leave-active .portfolio-item-background-padding-left {
  transform: translateX(-300px);
  transition-duration: .3s;
}

/* .fade-leave-active .portfolio-item-background-padding-left {
  transform: translateX(300px);
  transition-duration: .3s;
} */

.fade-leave-active .portfolio-item-background-padding-right {
  transform: translateX(300px);
  transition-duration: .3s;
}

/* .fade-leave-active .portfolio-item-background-padding-right {
  transform: translateX(-300px);
  transition-duration: .3s;
} */

@media (max-width: 767px) {
  .portfolio-item-stuff {
    width: 100%;
    left: 0%;
  }
  .portfolio-item-background-padding {
    display: none;
  }

  #portfolio-carousel-progressbar-wrapper {
    padding: 0px;
  }
}
</style>
