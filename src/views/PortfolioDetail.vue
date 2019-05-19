<template>
  <div id="portfolio-detail">
    <div class="portfolio-meta">
      <div class="portfolio-item-background">
        <div class="portfolio-item-background-padding portfolio-item-background-padding-left"></div>
      <div class="portfolio-item-background-padding portfolio-item-background-padding-right"></div>
        <img class="d-block w-100 portfolio-item-background-image" :src="getImgUrl(work.backgroundImage)"/>
      </div>

      <div class="portfolio-item-content d-none d-md-block container">
        <div class="portfolio-item-stuffs">
          <img
            v-for="stuff in work.stuffs" 
            v-bind:key="stuff.url"
            :src="getImgUrl(stuff.url)" />
        </div>
        
        <div class="portfolio-item-title">
          <span v-html="getWorkTitle()"></span>
        </div>
      </div>
    </div>
    <div class="portfolio-detail-info container">
      {{ work.overview }}
    </div>
  </div>
</template>

<script>
import works from "../assets/json/works.json";

export default {
  name: 'PortfolioDetail',
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
}

#portfolio-detail .portfolio-item-content {
  cursor: initial;
}

#portfolio-detail .portfolio-item-stuffs img {
  position: relative;
  width: 100%;
  top: -80px;
}

#portfolio-detail .portfolio-item-background-padding {
  opacity:0;
  transition: opacity .8s ease;
}
/* Transistion */
#portfolio-detail.fade-enter-active .portfolio-meta .portfolio-item-background-padding {
  
}

#portfolio-detail.fade-enter-active .portfolio-item-stuffs img {
  
}

#portfolio-detail.fade-leave-active .portfolio-item-stuffs img {
  transform: translateY(80px);
  transition-duration: .8s;
  transition: opacity .8s ease;
}
</style>
