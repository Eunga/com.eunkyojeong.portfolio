<template>
  <li class="portfolio-item" @click="goPortfolioDetail">
    <div class="portfolio-item-background">
      <img class="portfolio-item-background-image" :src="getImgUrl(work.backgroundImage)"/>
    </div>

    <div class="portfolio-item-stuffs">
      <img
        v-for="stuff in work.stuffs" 
        v-bind:key="stuff.url"
        :src="getImgUrl(stuff.url)" />
    </div>

    <div class="portfolio-item-content">
      <div class="portfolio-item-title">{{ work.title }}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    work: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(pet) {
      try {
        var images = require.context('../../assets/img/portfolio', true, /\.png$/)
        var image = images('./' + pet + '.png');
        return image;
      } catch (e) {
        return '';
      }
    },
    goPortfolioDetail() {
      this.$emit('goPortfolioDetail', this.work)
    },
  },
};

</script>

<style>
.portfolio-item {
  position: relative;
  min-height: 300px;
}

.portfolio-item-background {
  position: relative;
}

.portfolio-item-background>img {
  position: relative;
  width:100%;
}

.portfolio-item-stuffs {
  position: absolute;
  top:0%;
  bottom:0%;
  left:50%;
  max-width: 60%;
}

.portfolio-item-stuffs img {
  position: relative;
  width: 100%;
}

.portfolio-item-content {
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}

.portfolio-item-title {
  position:relative;
  left:0;
  bottom:0;
}
</style>


