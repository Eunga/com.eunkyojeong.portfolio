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

      <!-- <div id="portfolio-carousel-progressbar"></div> -->
    </div>
    <div id="portfolio-carousel-progressbar-wrapper">
      <div id="portfolio-carousel-progressbar"></div>
    </div>

    <div id="portfolio-item-content-mask"></div>
  </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue";

const CAROUSEL_INTERNVAL = 3000;
export default {
  name: "PortfolioList",
  components: {
    "portfolio-item": PortfolioItem
  },
  mounted() {
    $(document).ready(function() {
      $('#portfolio-list').carousel({
        interval: CAROUSEL_INTERNVAL
      });
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
  height: 5px;
  width: 100%;
  padding: 0px 120px;
  top: -5px;
  position: relative;
}
#portfolio-carousel-progressbar {
  height:100%;
  width:0%;
  width: 100%;
  position: relative;
  background-color: #5cb85c;
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

</style>
