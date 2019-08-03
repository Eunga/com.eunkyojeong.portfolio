<template>
  <div class="portfolio-item-detail">
    <div class="portfolio-item-detail-temp"></div>
    <component :is="comp" />

    <div class="portfolio-item-nav v-container-fluid">
      <div class="portfolio-item-nav-item portfolio-item-nav-prev" v-on:click="goOtherWork(prev)">
        <div class="portfolio-item-nav-id">
          <span>{{ formatedNumber(prev.id + 1) }}</span>
        </div>

        <div class="portfolio-item-nav-title">
          <span>{{ prev.title }}</span>
        </div>

        <div class="portfolio-item-nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="20" viewBox="0 0 48 20">
            <g transform="translate(1498 14560.582) rotate(180)">
              <rect class="a" width="48" height="20" transform="translate(1450 14540.581)" />
              <line class="b" x2="44" transform="translate(1451 14551.081)" />
              <path
                class="b"
                d="M1658.573,18177.992l8.75,8.752-8.75,8.748"
                transform="translate(-171.219 -3635.91)"
              />
            </g>
          </svg>
          <!-- <ArrowPrevSvg /> -->
        </div>
      </div>
      <div class="portfolio-item-nav-item portfolio-item-nav-next" v-on:click="goOtherWork(next)">
        <div class="portfolio-item-nav-id">
          <span>{{ formatedNumber(next.id + 1) }}</span>
        </div>

        <div class="portfolio-item-nav-title">
          <span>{{ next.title }}</span>
        </div>

        <div class="portfolio-item-nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="20" viewBox="0 0 48 20">
            <g transform="translate(-1450 -14540.581)">
              <rect class="a" width="48" height="20" transform="translate(1450 14540.581)" />
              <line class="b" x2="44" transform="translate(1451 14551.081)" />
              <path
                class="b"
                d="M1658.573,18177.992l8.75,8.752-8.75,8.748"
                transform="translate(-171.219 -3635.91)"
              />
            </g>
          </svg>
          <!-- <ArrowNextSvg /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowPrevSvg from "@/assets/img/common/ico_arrow_previous.svg";
import ArrowNextSvg from "@/assets/img/common/ico_arrow_next.svg";

export default {
  name: "PortfolioItemDetail",
  components: {
    ArrowPrevSvg,
    ArrowNextSvg
  },
  props: {
    work: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentId: function() {
      return this.work.id;
    },
    prev: function() {
      const prevWork = this.$store.getters.prevWork;
      return prevWork;
    },
    next: function() {
      const nextWork = this.$store.getters.nextWork;
      return nextWork;
    },
    name: function() {
      return this.work.name;
    },
    key: function() {
      return this.work.id;
    },
    comp: function() {
      const name = this.name;
      let comp = null;
      try {
        comp = () => import(`@/components/works/${name}.vue`);
      } catch (e) {
        // console.log(e);
      }

      return comp;
    }
  },
  methods: {
    goOtherWork(work) {
      this.$router.push({ path: `/portfolio/${work.path}` });
    },
    formatedNumber(number) {
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
.portfolio-item-nav-item svg .a {
  fill: rgba(255, 0, 0, 0);
}

.portfolio-item-nav-item svg .b {
  fill: none;
  stroke: #000;
  stroke-width: 2px;
}

.portfolio-item-nav {
  padding-top: 120px;
  border-top: solid 1px #dddddd;
  height: 410px;
}

.portfolio-item-nav-item {
  display: inline-block;
  max-width: 300px;
}

.portfolio-item-nav-item:hover {
  cursor: pointer;
}

.portfolio-item-nav-prev {
  float: left;
  text-align: left;
}

.portfolio-item-nav-next {
  float: right;
  text-align: right;
}

.portfolio-item-nav-id {
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #aaaaaa;

  position: relative;
  overflow: hidden;
}

.portfolio-item-nav-title {
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: #000000;
  margin-bottom: 10px;
  min-height: 140px;
}

.portfolio-item-nav-id::before {
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: #aaaaaa;
  position: absolute;
  height: 100%;
  width: 100%;
  top: -100%;
  transition: all 0.3s ease-out;
}

.portfolio-item-nav-id span {
  transition: all 0.3s;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  display: inline-block;
}

.portfolio-item-nav-item:hover .portfolio-item-nav-id span {
  transform: translateY(300%);
}

.portfolio-item-nav-item:hover .portfolio-item-nav-id::before {
  top: 0;
}

.portfolio-item-nav-prev .portfolio-item-nav-id::before {
  content: "Previous Project";
}

.portfolio-item-nav-next .portfolio-item-nav-id::before {
  content: "Next Project";
}

.portfolio-item-detail-temp {
  position: relative;
  min-height: 1000px;
  width: 100%;
}

@media (max-width: 767px) {
  .portfolio-item-nav {
    padding-top: 40px;
    height: 250px;
  }

  .portfolio-item-nav-item {
    width: 50%;
  }

  .portfolio-item-nav-id {
    font-size: 14px;
    line-height: 4.29;
  }

  .portfolio-item-nav-title {
    font-size: 22px;
    line-height: 1.18;
    letter-spacing: -0.4px;
    min-height: 100px;
  }
}
</style>
