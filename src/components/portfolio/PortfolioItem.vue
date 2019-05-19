<template>
  <div class="portfolio-item carousel-item"
    v-bind:class="{ active: isActive }">
    <div class="portfolio-item-background">
      <div class="portfolio-item-background-padding portfolio-item-background-padding-left"></div>
      <div class="portfolio-item-background-padding portfolio-item-background-padding-right"></div>
      <img class="d-block w-100 portfolio-item-background-image" :src="getImgUrl(work.backgroundImage)"/>
    </div>

    <div class="portfolio-item-content carousel-caption d-none d-md-block container"
      @click="goPortfolioDetail">
      <div class="portfolio-item-stuffs">
        <img
          v-for="stuff in work.stuffs" 
          v-bind:key="stuff.url"
          :src="getImgUrl(stuff.url)" />
      </div>
      
      <div class="portfolio-work-count">
        <span>{{ getWorkCountNumber(work.id) }} ㅡ {{ getWorkCountNumber(work.parantWorks.length) }}</span>
      </div>
      
      <div class="portfolio-item-title">
        <span v-html="getWorkTitle()"></span>
      </div>
    </div>
  </div>
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
  data () {
    return {
      isActive: (this.work.id == 1)
    }
  },
  methods: {
    getWorkTitle() {
      this.work.title = this.work.title.replace(/\n/g, '<br/>');
      return this.work.title;
    },
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
      this.$router.push({ path: `/portfolio/${this.work.path}`});
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
.portfolio-item {
  position: relative;
  height: 100%;
}

.portfolio-item-background {
  position: fixed;
  /* width: calc(100% - 240px) !important; */
  width: 100%;
  left:0;
  right:0;
  overflow: hidden;
  margin:auto;
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

.portfolio-item-background > img {
    position: relative;
    width: 100%;
    /* width: calc(100% + 240px) !important;
    left: -120px; */
}

.portfolio-item-stuffs {
  position: absolute;
  right:0;
  width: 70%;
}

.portfolio-item-stuffs img {
  position: relative;
  width: 100%;
}

.portfolio-item-content {
  position: relative;
  left: 0;
  right: 0;
  padding-top: 120px;
  cursor:pointer;
}

.portfolio-item-title {
  position: absolute;;
  color:black;
  left: 10%;
  top: 35%;
  font-size: 50px;
}

.portfolio-work-count {
  position: relative;
  text-align: left;

  color:black;
  left: 10%;
  top: 15%;
}

.portfolio-work-count span {
  font-size: 30px;
}

/* Tansition */
.fade-leave-active .portfolio-item .portfolio-item-stuffs img {
  transform: translateY(-80px);
  transition-duration: .8s;
}

</style>


