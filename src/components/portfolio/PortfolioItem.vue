<template>
  <div class="portfolio-item carousel-item"
    v-bind:class="[{ active: isActive(), detail: isDetail, list: !isDetail}, theme ]">
    <div class="portfolio-item-background">
      <div class="portfolio-item-background-padding portfolio-item-background-padding-left"></div>
      <div class="portfolio-item-background-padding portfolio-item-background-padding-right"></div>
      <img class="portfolio-item-background-image" :src="getImgUrl(work.backgroundImage)"/>
    </div>

    <div class="portfolio-item-content carousel-caption d-none d-md-block container"
      @click="goPortfolioDetail">
      <div class="portfolio-item-stuff">
        <img :src="getImgUrl(work.stuff.url)" />
      </div>

      <div class="portfolio-item-brief">
        <div class="portfolio-work-count">
          <span class="porfolio-work-count-current">{{ getWorkIdNumber() }}</span> 
            / 
          <span class="porfolio-work-count-all">{{ getCountOfAllWorks() }}</span>
        </div>

        <div class="portfolio-item-title">
          <span v-html="getWorkTitle()"></span>
        </div>

        <div class="portfolio-item-subtitle">
          <span v-html="getWorkSubtitle()"></span>
        </div>

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
      theme: this.work.theme
    }
  },
  methods: {
    isActive() {
      let obj = {
        work: this.work,
      };
      this.$store.commit('amIActive', obj);
      return obj.isActive;
    },
    getWorkTitle() {
      this.work.title = this.work.title.replace(/\n/g, '<br/>');
      return this.work.title;
    },
    getWorkSubtitle() {
      this.work.subtitle = this.work.subtitle.replace(/\n/g, '<br/>');
      return this.work.subtitle;
    },
    getImgUrl(pet) {
      try {
        const images = require.context('../../assets/img/portfolio', true, /\.png$/);
        const image = images('./' + pet + '.png');
        return image;
      } catch (e) {
        return pet;
      }
    },
    goPortfolioDetail() {
      $('#portfolio').addClass('transition');
      this.$store.commit('changeCurrentWorkId', this.work.id);
      this.$router.push({ path: `/portfolio/${this.work.path}`});
    },
    getWorkIdNumber() {
      return this.numberFormatWithTwoDigits(this.work.id + 1);
    },
    getCountOfAllWorks() {
      const count = this.$store.getters.length;
      return this.numberFormatWithTwoDigits(count);

      return countStr;
    },
    numberFormatWithTwoDigits(number) {
      let countStr;
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

.portfolio-item.white .portfolio-item-count, .portfolio-item.white .portfolio-item-title, .portfolio-item.white .portfolio-item-subtitle {
  color:white;
}

.portfolio-item.black .portfolio-item-count, .portfolio-item.black .portfolio-item-title, .portfolio-item.black .portfolio-item-subtitle {
  color:black;
}

.portfolio-item-background {
  width: 100%;
  transition: all 0.3s ease-in;
}

.list .portfolio-item-background {
  position: absolute;
}

.detail {
  display: block !important;
}

.detail .portfolio-item-background {
  position: fixed;
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

.portfolio-item-stuff {
  /* position: relative; */
  position: absolute;
  width: 50%;
  left: 50%;
}

.portfolio-item-stuff img {
  position: relative;
  width: 100%;

  
}

.portfolio-item-content {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  /* margin-top: 120px; */
  padding-top: 120px;
  cursor:pointer;
}

.portfolio-item-brief {
  transition: all .3s ease-out;
  position: relative;
  top: 200px;
  left: 0;
}

.portfolio-item-title {
  transition: all .3s ease-out;
  text-align: left;
  color: black;
  font-size: 50px;
}

.portfolio-item-subtitle {
  transition: all .3s ease-out;
  text-align: left;
  color: black;
  font-size: 20px;
}

.list .portfolio-item-subtitle {
  display: none;
}

.detail .portfolio-item-subtitle {
  visibility: visible;
}

.detail .portfolio-item-subtitle::before {
  margin-top: 40px;
  margin-bottom:15px;
  content: ' ';
  width: 30px;
  height: 1px;
  border-bottom: 2px solid black;
  display: block;
}

.detail.white .portfolio-item-subtitle::before {
  border-bottom: 2px solid white;
}

.list.white .porfolio-work-count-current, .list.white .portfolio-work-count {
  color: white;
}

.list.black .porfolio-work-count-current {
  color: black;
}

.portfolio-item.detail .portfolio-item-brief {
  top: -50px;
}

.portfolio-work-count {
  position: relative;
  text-align: left;

  color:black;
}

.detail .portfolio-item-brief .portfolio-work-count {
  visibility: hidden;
}

.portfolio-work-count span {
  font-size: 30px;
}

.detail .portfolio-item-stuff img {
  transform: translateY(-80px) scale(0.8);
}
.porfolio-work-count-current {
  font-weight: bold;
}

.porfolio-work-count-all {
  color: gray;
}
/* Tansition */
.fade-leave-active .portfolio-item.list .portfolio-item-stuff img {
  transform: translateY(-80px) scale(0.8);
  transition-duration: .3s;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-stuff img {
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

.fade-leave-active .portfolio-item.list .portfolio-item-brief .portfolio-work-count {
  visibility: hidden;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-brief .portfolio-work-count {
  visibility: visible;
  /* display: block; */
}

/* .fade-leave-active .portfolio-item.list .portfolio-item-brief .portfolio-item-title {
  top: -50px;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-brief .portfolio-item-title {
  top: 200px;
} */

.fade-leave-active .portfolio-item.list .portfolio-item-brief {
  top: -50px;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-brief {
  top: 200px;
}

.fade-leave-active .portfolio-item.list .portfolio-item-brief .portfolio-item-subtitle {
  visibility: visible;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-brief .portfolio-item-subtitle {
  display: none;
}
</style>


