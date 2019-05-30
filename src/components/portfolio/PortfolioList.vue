<template>
  <div id="portfolio-list" class="carousel slide" data-interval="false" data-ride="carousel">
  <!-- <div id="portfolio-list"> -->
    <!-- <div class="carousel slide" data-interval="false" data-ride="carousel"> -->
      <div v-if="works.length" 
        class="portfolio-carousel carousel-inner">
        <portfolio-item
          v-on:goPortfolioDetail="goPortfolioDetail($event)"
          v-for="work in validWorks"
          v-bind:work="work"
          v-bind:isDetail="false"
          v-bind:key="work.id"
        />
      <!-- </div> -->
    </div>

    <!-- <hr class="transition-timer-carousel-progress-bar" /> -->
    <!-- <button
      style="display:none;"
      class="carousel-control-prev"
      @click="previous()">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    
    <button
      style="display:none;"
      class="carousel-control-next"
      @click="next()">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button> -->

    <div id="portfolio-item-content-mask"></div>
  </div>
</template>

<script>
import works from "../../assets/json/works.json";
import PortfolioItem from "./PortfolioItem.vue";

export default {
  name: "PortfolioList",
  components: {
    "portfolio-item": PortfolioItem
  },
  watch: {
    $route: function(to, from) {
      //
    }
  },
  data() {
    return {
      works: works,
      validWorks: works.filter(work => work.shouldBeExposed).map(function(v, i, arr) {
        v.parantWorks = arr;
        return v;
      }),
      currentWorkId: works[0].id
    };
  },
  mounted() {
    this.validWorks[0].isActive = true;

    $('.carousel').carousel({
      // interval: 500
      interval: false
    });

    var _this = this;
    $('#portfolio-list').on('slide.bs.carousel', function (e) {
      var current = e.to + 1;
      _this.currentWorkId = current;

      console.log(current);
      //console.log(e);
    });


    /* Bootstrap Carousel Progress bar */
    /* https://codepen.io/bsngr/pen/oBWgPy */
    // $(document).ready(function(){
    //   var percent = 0, bar = $('.transition-timer-carousel-progress-bar'), crsl = $('#myCarousel');
		// 	function progressBarCarousel() {
		// 	  bar.css({width:percent+'%'});
		// 	 percent = percent +0.5;
		// 	  if (percent>100) {
		// 	      percent=0;
		// 	      crsl.carousel('next');
		// 	  }      
		// 	}
		// 	crsl.carousel({
		// 	    interval: false,
		// 	    pause: true
		// 	}).on('slid.bs.carousel', function () {});var barInterval = setInterval(progressBarCarousel, 30);
		// 	crsl.hover(
		// 	    function(){
		// 	        clearInterval(barInterval);
		// 	    },
		// 	    function(){
		// 	        barInterval = setInterval(progressBarCarousel, 30);
    //       })
    // });
  },
  methods: {
    goPortfolioDetail(work) {
      console.log(`[PortfolioList] click detail work ${work.id}`);
      this.$emit("goPortfolioDetail", work);
    },
    next() {
      console.log("hello")
      $('#portfolio-list').carousel('next');
    },
    previous() {
      console.log("bye")
      $('#portfolio-list').carousel('prev');
    },
  }
};

</script>

<style>
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

/* #portfolio-list > ul {
  list-style: none;
  height: 100%;
  white-space: nowrap;
  position: relative;
  margin: 0;
  padding: 0;
} */

.portfolio-carousel {
  width: 100%;
  height: 100%;
}

.carousel-control-next {
  z-index: 100;
}


/* Bootstrap Carousel Progress bar */
/* https://codepen.io/bsngr/pen/oBWgPy */
/* .transition-timer-carousel-progress-bar {
    height: 3px;
    background-color: #5cb85c;
    width: 0%;
    margin: 0px 0px 0px 0px;
    border: none;
    z-index: 11;
    position: relative;
} */

</style>
