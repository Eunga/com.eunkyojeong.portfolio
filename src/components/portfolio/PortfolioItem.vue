<template>
  <div class="portfolio-item carousel-item"
    v-bind:class="{ active: isActive, detail: isDetail, list: !isDetail }">
    <div class="portfolio-item-background">
      <div class="portfolio-item-background-padding portfolio-item-background-padding-left"></div>
      <div class="portfolio-item-background-padding portfolio-item-background-padding-right"></div>
      <img class="portfolio-item-background-image" :src="getImgUrl(work.backgroundImage)"/>
    </div>

    <div class="portfolio-item-content carousel-caption d-none d-md-block container"
      @click="goPortfolioDetail">
      <div class="portfolio-item-stuffs">
        <img
          v-for="stuff in work.stuffs" 
          v-bind:key="stuff.url"
          :src="getImgUrl(stuff.url)" />
      </div>
      
      <div class="portfolio-item-title">
        <div class="portfolio-work-count">
          <span>{{ getWorkCountNumber(work.id) }} ㅡ {{ getWorkCountNumber(work.parantWorks.length) }}</span>
        </div>
        
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
    },
    isDetail: {
      type: Boolean,
      required: false,
      default: false
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

.list .portfolio-item-background {
  position: absolute;
  width: 100%;
  left:0;
  right:0;
  overflow: hidden;
  margin:auto;
}

.detail .portfolio-item-background {
  position: fixed;
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

.list .portfolio-item-background-padding-left {
  left:0;
}

.list .portfolio-item-background-padding-right {
  right:0;
}

.detail .portfolio-item-background-padding-left {
  left:-300px;
}

.detail .portfolio-item-background-padding-right {
  right:-300px;
}

.portfolio-item-background > img {
  position: relative;
  width: 100%;
  height: 100%;
}

.portfolio-item-stuffs {
  /* position: relative; */
  position: absolute;
  width: 50%;
  left: 50%;
}

.portfolio-item-stuffs img {
  position: relative;
  width: 100%;

  
}

.portfolio-item-content {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  margin-top: 120px;
  cursor:pointer;
}

.portfolio-item-title {
  transition: all .3s ease-out;
  position: relative;
  top: 200px;
  left: 0;
  text-align: left;
  color: black;
  font-size: 50px;
}

.portfolio-item.detail .portfolio-item-title {
  top: -50px;
}

.portfolio-work-count {
  position: relative;
  text-align: left;

  color:black;
}

.detail .portfolio-item-title .portfolio-work-count {
  visibility: hidden;
}

.portfolio-work-count span {
  font-size: 30px;
}

.detail .portfolio-item-stuffs img {
  transform: translateY(-80px) scale(0.8);
}

/* Tansition */
.fade-leave-active .portfolio-item.list .portfolio-item-stuffs img {
  transform: translateY(-80px) scale(0.8);
  transition-duration: .3s;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-stuffs img {
  transform: translateY(0px) scale(1);
  transition-duration: .3s;
}


.fade-leave-active .portfolio-item.list .portfolio-item-background-padding-left {
  transform: translateX(-300px);
  transition-duration: .3s;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-background-padding-left {
  transform: translateX(300px);
  transition-duration: .3s;
}

.fade-leave-active .portfolio-item.list .portfolio-item-background-padding-right {
  transform: translateX(300px);
  transition-duration: .3s;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-background-padding-right {
  transform: translateX(-300px);
  transition-duration: .3s;
}

.fade-leave-active .portfolio-item.list .portfolio-item-title .portfolio-work-count {
  visibility: hidden;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-title .portfolio-work-count {
  display: block;
}

.fade-leave-active .portfolio-item.list .portfolio-item-title {
  top: -50px;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-title {
  top: 200px;
}

</style>


