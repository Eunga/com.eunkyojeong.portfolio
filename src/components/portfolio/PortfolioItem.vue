<template>
  <div
    class="portfolio-item carousel-item"
    v-bind:class="[{ active: isActive(), detail: isDetail, list: !isDetail}, theme() ]"
  >
    <div class="portfolio-item-background">
      <img class="portfolio-item-background-image" 
        :src="getImgUrl(computeWorkBackgroundImageWhetherWorkIsLocked())" />
    </div>

    <div class="v-container-fluid portfolio-item-stuff">
      <div class="portfolio-item-stuff-img-wrapper">
        <img :src="getImgUrl(computeWorkStuffUrlWhetherWorkIsLocked(), computeWorkStuffExtWhetherWorkIsLocked())" />
      </div>
    </div>
    
    <div 
      class="portfolio-item-content carousel-caption d-md-block"
      @click="goPortfolioDetail">
      
      <div class="portfolio-item-brief-wrapper">
        <div class="portfolio-item-brief">
          <div class="portfolio-work-count">
            <span class="portfolio-work-count-current">{{ getWorkIdNumber() }}</span>
            <span class="portfolio-work-count-delimeter">/</span>
            <span class="portfolio-work-count-all">{{ getCountOfAllWorks() }}</span>
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
    computeWorkBackgroundImageWhetherWorkIsLocked() {
      if (this.work.isLockedProject && this.work.isUnlocked) {
        return this.work.unlockedInfo.backgroundImage
      }

      return this.work.backgroundImage
    },
    computeWorkStuffUrlWhetherWorkIsLocked() {
      if (this.work.isLockedProject && this.work.isUnlocked) {
        return this.work.unlockedInfo.stuff.url;
      }

      return this.work.stuff.url;
    },
    computeWorkStuffExtWhetherWorkIsLocked() {
      if (this.work.isLockedProject && this.work.isUnlocked) {
        return this.work.unlockedInfo.stuff.ext;
      }

      return this.work.stuff.ext;
    },
    theme() {
      if (this.work.isLockedProject && this.work.isUnlocked) {
        return this.work.unlockedInfo.theme;
      }
      return this.work.theme;
    },
    isActive() {
      let obj = {
        work: this.work
      };
      this.$store.commit("amIActive", obj);
      return obj.isActive;
    },
    getWorkTitle() {
      if (this.work.isLockedProject && this.work.isUnlocked) {
        const title = this.work.unlockedInfo.title.replace(/\n/g, "<br/>");
        return title;
      }

      const title = this.work.title.replace(/\n/g, "<br/>");
      return title;
    },
    getWorkSubtitle() {
      if (this.work.isLockedProject && this.work.isUnlocked) {
        const subtitle = this.work.unlockedInfo.subtitle.replace(/\n/g, "<br/>");
        return subtitle;
      }

      const subtitle = this.work.subtitle.replace(/\n/g, "<br/>");
      return subtitle;
    },
    getImgUrl(pet, ext) {
      if (!ext) {
        ext = 'png';
      }

      try {
        const images = require.context(
          "../../assets/img/portfolio",
          true,
          /\.png$/
        );
        const image = images("./" + pet + `.${ext}`);
        return image;
      } catch (e) {
        return pet;
      }
    },
    goPortfolioDetail() {
      this.$emit('goPortfolioDetail', this.work);
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
        countStr = "0" + number;
      } else {
        countStr = "" + number;
      }

      return countStr;
    }
  }
};
</script>

<style>
.portfolio-item {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.portfolio-item.white .portfolio-item-count,
.portfolio-item.white .portfolio-item-title,
.portfolio-item.white .portfolio-item-subtitle,
.portfolio-item.white .portfolio-work-count {
  color: white;
  text-shadow: 0px 0px 30px rgba(0,0,0,.3);
}

.portfolio-item.black .portfolio-item-count,
.portfolio-item.black .portfolio-item-title,
.portfolio-item.black .portfolio-item-subtitle {
  color: black;
}

.portfolio-item-background {
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: 0;
  transition: all 0.3s ease-in-out;
}

.mobileAnim .portfolio-item-background {
  transition-duration: 0.2s;
}

.detail {
  display: block !important;
}

.portfolio-item-background > img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.portfolio-item-stuff {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  transition-property: all;
  transform-origin: top;
}

.portfolio-item-stuff img {
  position: relative;
  height: 100%;
  right: 0px;
}

.portfolio-item-content {
  position: relative;
  height: 100vh;
  width: 100vw;
  /* height: calc(var(--vh, 1vh) * 100); */
  left: 0;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 0px;
}

.portfolio-item-brief-wrapper {
  transition: all 0.3s ease-in-out;
  position: relative;
  height: 100%;
}

.mobileAnim .portfolio-item-brief-wrapper {
  transition-duration: 0.2s;
}

.portfolio-item-brief {
  position: absolute;
}

.list .portfolio-item-brief {
  bottom: 0px;
}

.detail .portfolio-item-brief {
}

.portfolio-item-title {
  text-align: left;
  font-family: Questrial;
  font-size: 52px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: -1.4px;
}

.portfolio-item-subtitle {
  font-family: Questrial;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.6px;
  text-align: left;
  color: black;

  transition: all .6s ease-in-out;
}

.list .portfolio-item-subtitle {
  display: none;
  opacity: 0;
}

.detail .portfolio-item-subtitle {
  visibility: visible;
}

.portfolio-item-subtitle::before {
  padding-top: 84px;
  margin-bottom: 40px;
  content: " ";
  width: 50px;
  height: 1px;
  border-bottom: 2px solid black;
  display: block;
}

.white .portfolio-item-subtitle::before {
  border-bottom: 2px solid white;
}

.portfolio-item.white .portfolio-work-count-current,
.portfolio-item.white .portfolio-work-count {
  color: white;
}

.portfolio-item.black .portfolio-work-count-current {
  color: black;
}

.portfolio-work-count {
  position: relative;

  color: black;
  font-family: Questrial;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.04;
  letter-spacing: -0.7px;
  text-align: left;

  margin-bottom: 38px;
  margin-left:4px;
}

.detail .portfolio-work-count {
  visibility: hidden;
}

.detail .portfolio-item-stuff img {

}

.portfolio-work-count-current {
  
}

.portfolio-work-count-all,
.portfolio-work-count-delimeter {
  opacity: 0.3;
}

.portfolio-work-count-delimeter {
  padding-left: 6px;
  padding-right: 6px;
}

@media (max-width: 767px) {
  .portfolio-item-stuff {
    width: 100%;
    left: 0%;
    top: 0%;
    margin-left: 0px !important;
  }

  .portfolio-item-title {
    font-size: 28px;
  }

  .portfolio-item-subtitle::before {
    padding-top: 30px;
    margin-bottom: 10px;
    width: 26px;
  }

  .portfolio-item-subtitle {
    font-size: 18px;
  }

  .portfolio-work-count {
    font-size: 14px;
  }

  .portfolio-item-stuff img {
    height: 70%;
  }
}

.detail.portfolio-item {
  height: 100%;
}

.portfolio-item-stuff-img-wrapper {
  position:relative; 
  height: 100%;
  text-align: right;
}

.list .portfolio-item-stuff-img-wrapper {
  height: 100vh;
}

@media (min-width: 500px) and (max-width: 767px) {
  .portfolio-item-stuff {
    
  }

  .portfolio-item-stuff img {
    height: 90%;
  }
}

/* Media Queries */
@media screen and (max-width: 767px) {
  .portfolio-item-content {
    padding-top: 48px;
    padding-bottom: 30px;
    padding-left: 30px !important;
    padding-right: 30px !important;

    /* Mobile Browser에서는 Navigation/Addressbar가 있어서 이렇게 처리해줘야 함 */
    height: calc(var(--vh, 1vh) * 100 - 30px);
  }

  .detail .portfolio-item-brief {
    top: 200px;
  }

  .portfolio-item-stuff-img-wrapper {
    float: initial;
    width: 100%;
    text-align: center;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .portfolio-item-content {
    padding-top: 80px;
    padding-bottom: 80px;

    padding-left: 60px !important;
    padding-right: 60px !important;
  }

  .portfolio-item-subtitle::before {
    padding-top: 40px;
    margin-bottom: 30px;
  }

  .detail .portfolio-item-brief {
    top: 270px;
  }
  
  .portfolio-item-stuff-img-wrapper {
    width: 100%;
    text-align: center;
  }

  .portfolio-item-stuff img {
    height: 70%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .portfolio-item-content {
    padding-top: 80px;
    padding-left: 160px !important;
    padding-right: 160px !important;
    padding-bottom: 160px;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  .portfolio-item-content {
    padding-top: 120px;

    padding-left: 240px !important;
    padding-right: 240px !important;
    padding-bottom: 240px !important;
  }
}

@media screen and (min-width: 1777px) {
  .portfolio-item-content {
    width: 1296px;
    margin: auto !important;
    padding-top: 120px;
    padding-bottom: 250px;
  }

  .portfolio-item-title {
    font-size: 70px;
  }
}

</style>
