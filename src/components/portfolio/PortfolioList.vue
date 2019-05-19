<template>
  <div id="portfolio-list" class="carousel slide" data-ride="carousel">
    <div v-if="works.length" class="portfolio-carousel carousel-inner">
      <portfolio-item
        v-on:goPortfolioDetail="goPortfolioDetail($event)"
        v-for="work in validWorks"
        v-bind:work="work"
        v-bind:key="work.id"
      />
    </div>


    <button
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
    </button>

    <!-- <a
      class="carousel-control-prev"
      :href="calculatePreviousPortfolioId()"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      :href="calculateNextPortfolioId()"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a> -->
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
#portfolio-list {
  height: 100%;
  width: 100%;
}

#portfolio-list > ul {
  list-style: none;
  height: 100%;
  white-space: nowrap;
  position: relative;
  margin: 0;
  padding: 0;
}

.portfolio-carousel {
  width: 100%;
  height: 100%;
}

.carousel-control-next {
  z-index: 100;
}
</style>
