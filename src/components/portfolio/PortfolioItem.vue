<template>
  <div class="portfolio-item carousel-item"
    v-bind:class="[{ active: isActive(), detail: isDetail, list: !isDetail}, theme() ]">
    <div class="portfolio-item-background">
      
      <div v-if="isDetail" class="portfolio-detail-item-background-padding portfolio-detail-item-background-padding-left"></div>
      <div v-if="isDetail" class="portfolio-detail-item-background-padding portfolio-detail-item-background-padding-right"></div>
      
      <img class="portfolio-item-background-image" :src="getImgUrl(work.backgroundImage)"/>
    </div>

    <div class="portfolio-item-content carousel-caption d-md-block container" @click="goPortfolioDetail">
      <div class="portfolio-item-stuff">
        <img :src="getImgUrl(work.stuff.url)" />
      </div>

      <div class="portfolio-item-brief">
        <div class="portfolio-work-count">
          <span class="porfolio-work-count-current">{{ getWorkIdNumber() }}</span> 
          <span class="porfolio-work-count-delimeter">  / </span>
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
  methods: {
    theme() {
      return this.work.theme;
    },
    isActive() {
      let obj = {
        work: this.work,
      };
      this.$store.commit('amIActive', obj);
      return obj.isActive;
    },
    getWorkTitle() {
      const title = this.work.title.replace(/\n/g, '<br/>');
      return title;
    },
    getWorkSubtitle() {
      const subtitle = this.work.subtitle.replace(/\n/g, '<br/>');
      return subtitle;
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
  position: fixed;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;


  position: fixed;
  left:0;
  right:0;
  overflow: hidden;
  margin:auto;
}

.detail {
  display: block !important;
}

/* ====================================================================== */
.portfolio-detail-item-background-padding {
  position: absolute;
  width: 120px;
  height:100%;
  z-index: 10;
  background-color: white;
}

/**
 * [Start] List <-> Detail 전환 시, "item-padding left & right" animation
 */
.portfolio-detail-item-background-padding-left {
  left: -300px;
}
.portfolio-detail-item-background-padding-right {
  right: -300px;
}
.fade-leave-active .portfolio-detail-item-background-padding-left {
  transform: translateX(300px);
  transition-duration: .3s;
}
.fade-leave-active .portfolio-detail-item-background-padding-right {
  transform: translateX(-300px);
  transition-duration: .3s;
}
/**
 * [End] List <-> Detail 전환 시, "item-padding left & right" animation
 */


.portfolio-item-background > img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.portfolio-item-stuff {
  position: absolute;
  width: 50%;
  left: 50%;
  top: 180px;
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
  padding-top: 120px;
  cursor:pointer;
}

.portfolio-item-brief {
  transition: all .3s ease-out;
  position: absolute;
  top: 400px;
  left: 0;
}

.portfolio-item-title {
  transition: all .3s ease-out;

  text-align: left;
  font-family: Questrial;
  font-size: 70px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: -1.4px;
}

.portfolio-item-subtitle {
  transition: all .3s ease-out;
  
  font-family: Questrial;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.6px;
  text-align: left;
  color: black;
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
  top: 200px;
}

.portfolio-work-count {
  position: relative;

  color:black;
  font-family: Questrial;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.04;
  letter-spacing: normal;
  text-align: left;
  
  margin-bottom: 28px;
}

.detail .portfolio-work-count {
  visibility: hidden;
}

.detail .portfolio-item-stuff img {
  transform: translateY(-80px) scale(0.8);
}

.porfolio-work-count-current {
  font-weight: bold;
}

.porfolio-work-count-all, .porfolio-work-count-delimeter {
  opacity: .3;
}


/**
 * [Start] List <-> Detail 전환 시, "item-stuff" animation
 */
.fade-leave-active .portfolio-item.list .portfolio-item-stuff img {
  transform: translateY(-80px) scale(0.8);
  transition-duration: .3s;
}

.fade-leave-active .portfolio-item.detail .portfolio-item-stuff img {
  transform: translateY(0px) scale(1);
  transition-duration: .3s;
}
/**
 * [End] List <-> Detail 전환 시, "item-stuff" animation
 */



/**
 * [Start] List <-> Detail 전환 시, "item-brief", "item-subtitle", "work-count" animation
 */
.fade-leave-active .list .portfolio-item-brief .portfolio-work-count {
  visibility: hidden;
}
.fade-leave-active .list .portfolio-item-brief {
  top: 200px;
}
.fade-leave-active .detail .portfolio-item-brief {
  top: 400px;
}
.fade-leave-active .list .portfolio-item-brief .portfolio-item-subtitle {
  visibility: visible;
  /* transform: translateY(100px); */
}
.fade-leave-active .detail .portfolio-item-brief .portfolio-item-subtitle {
  display: none;
}

.fade-enter-active .detail .portfolio-item-brief .portfolio-item-subtitle {
  opacity: 1;
  /* transform: translateY(10px); */
}
/**
 * [End] List <-> Detail 전환 시, "item-brief", "item-subtitle", "work-count" animation
 */


@media (max-width: 767px) {
  .portfolio-item-stuff {
    width: 100%;
    left: 0%;
  }

  .portfolio-item-content {
    padding-top: 48px;
  }

  .portfolio-item-brief {
    bottom: 30px;
  }
}

</style>
