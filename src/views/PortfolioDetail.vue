<template>
  <div id="portfolio-detail">
    <div class="portfolio-meta">
      <portfolio-item
        v-bind:isDetail="true"
        v-bind:work="work"
        v-bind:key="work.id"
      />
    </div>
    <div class="portfolio-detail-info">
      <div class="container">
        {{ work.overview }}
      </div>
    </div>
  </div>
</template>

<script>
import works from "../assets/json/works.json";
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";

export default {
  name: 'PortfolioDetail',
  components: {
    "portfolio-item": PortfolioItem
  },
  data() {
    return {
      works: works
    }
  },
  computed: {
    work() {
      var wholePath = this.$route.path;
      var paths = wholePath.split('/');
      var path = paths[paths.length - 1];

      this.works.filter(work => work.shouldBeExposed).map(function(v, i, arr) {
        v.parantWorks = arr;
        return v;
      });

      var work = null;
      this.works.forEach(element => {
        if (element.path == path) {
          work = element;
          return;
        }
      });

      return work;
    }
  },
  methods: {
    getWorkTitle() {
      this.work.title = this.work.title.replace(/\n/g, '<br/>');
      return this.work.title;
    },
    getImgUrl(pet) {
      try {
        var images = require.context('../assets/img/portfolio', true, /\.png$/)
        var image = images('./' + pet + '.png');
        return image;
      } catch (e) {
        return '';
      }
    },
    goPortfolioDetail() {
      this.$emit('goPortfolioDetail', this.work)
    },
    getWorkCountNumber(number) {
      var countStr;
      if (number < 10) {
        countStr = '0' + number;
      } else {
        countStr = '' + number;
      }

      return countStr;
    }
  },
};
</script>

<style>
/*  */
#portfolio-detail {
  width:100%;
  height:100%;
}

.portfolio-meta, .portfolio-detail-info {
  position: relative;
  height: 100%;
  background-color: white;
}

#portfolio-detail .portfolio-item-content {
  cursor: initial;
}
</style>
