<template>
  <div
    class="portfolio-item carousel-item"
    v-bind:class="[{ active: isActive(), detail: isDetail, list: !isDetail}, theme() ]"
  >
    <div class="portfolio-item-background">
      <img class="portfolio-item-background-image" :src="getImgUrl(work.backgroundImage)" />
    </div>

    <div class="portfolio-item-content carousel-caption d-md-block" @click="goPortfolioDetail">
      <div class="portfolio-item-brief-wrapper">
        <div class="portfolio-item-stuff">
          <img :src="getImgUrl(work.stuff.url)" />
        </div>

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
          <!-- <div class="portfolio-item-subtitle animatable fadeInUp"> -->
            <span v-html="getWorkSubtitle()"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
;

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
        work: this.work
      };
      this.$store.commit("amIActive", obj);
      return obj.isActive;
    },
    getWorkTitle() {
      const title = this.work.title.replace(/\n/g, "<br/>");
      return title;
    },
    getWorkSubtitle() {
      const subtitle = this.work.subtitle.replace(/\n/g, "<br/>");
      return subtitle;
    },
    getImgUrl(pet) {
      try {
        const images = require.context(
          "../../assets/img/portfolio",
          true,
          /\.png$/
        );
        const image = images("./" + pet + ".png");
        return image;
      } catch (e) {
        return pet;
      }
    },
    goPortfolioDetail() {
      $("#portfolio").addClass("transition");
      this.$store.commit("changeCurrentWorkId", this.work.id);
      this.$router.push({ path: `/portfolio/${this.work.path}` });
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
}

.portfolio-item.white .portfolio-item-count,
.portfolio-item.white .portfolio-item-title,
.portfolio-item.white .portfolio-item-subtitle {
  color: white;
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
  transition: all 0.3s ease-in;
}

.detail {
  display: block !important;
}

.portfolio-item-background > img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.portfolio-item-stuff {
  position: relative;
  float: right;
  width: 50%;
  top: 10%;
}

.portfolio-item-stuff img {
  position: relative;
  width: 100%;
  transform: scale(1.3);
  transform-origin: top;
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
  transition: all 0.3s ease-out;
  position: relative;
  height: 100%;
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
  font-size: 70px;
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

/* .detail .portfolio-item-subtitle::before {
  margin-top: 84px;
  margin-bottom: 40px;
  content: " ";
  width: 50px;
  height: 1px;
  border-bottom: 2px solid black;
  display: block;
} */

.portfolio-item-subtitle::before {
  margin-top: 84px;
  margin-bottom: 40px;
  content: " ";
  width: 50px;
  height: 1px;
  border-bottom: 2px solid black;
  display: block;
}

.detail.white .portfolio-item-subtitle::before {
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
  letter-spacing: normal;
  text-align: left;

  margin-bottom: 28px;
}

.detail .portfolio-work-count {
  visibility: hidden;
}

.detail .portfolio-item-stuff img {
  transform: scale(0.8);
}

.portfolio-work-count-current {
  font-weight: bold;
}

.portfolio-work-count-all,
.portfolio-work-count-delimeter {
  opacity: 0.3;
}

@media (max-width: 767px) {
  #portfolio-meta {
    height: 480px !important;
  }

  .portfolio-item-stuff {
    width: 100%;
    left: 0%;
    top: 0%;
  }

  .portfolio-item-title {
    font-size: 28px;
  }

  /* .detail .portfolio-item-subtitle::before {
    margin-top: 30px;
    margin-bottom: 10px;
    width: 26px;
  } */

  .portfolio-item-subtitle::before {
    margin-top: 30px;
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
    /* transform: scale(1.45); */
  }
}

@media (min-width: 500px) and (max-width: 767px) {
  .portfolio-item-stuff {
    /* top: 100px; */
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
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .portfolio-item-content {
    padding-top: 80px;
    padding-bottom: 180px;

    padding-left: 60px !important;
    padding-right: 60px !important;
  }

  .detail .portfolio-item-brief {
    top: 110px;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
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

    /* TODO: 계산해야함 */
    padding-bottom: 250px;
  }
}
</style>
