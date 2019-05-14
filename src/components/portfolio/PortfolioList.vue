<template>
  <div>
    <div id="portfolio-list">
      <ul v-if="works.length">
        <portfolio-item 
          v-on:goPortfolioDetail="goPortfolioDetail($event)"
          v-show="work.isActive" 
          v-for="work in validWorks" 
          v-bind:work="work" 
          v-bind:key="work.id"/>
      </ul>
    </div>
  </div>
</template>

<script>
import works from '../../assets/json/works.json';
import PortfolioItem from './PortfolioItem.vue';

export default {
  name: 'PortfolioList',
  components: {
    'portfolio-item': PortfolioItem
  },
  watch: {
		'$route': function(to, from) {
      //
		}
	},
  data() {
    return {
      works: works,
      validWorks: works.filter(work => work.shouldBeExposed),
    };
  },
  mounted() {
    this.validWorks[0].isActive = true;
    setNextPortfolio(this.validWorks, 2, TIME_INTERVAL);
  },
  methods: {
    goPortfolioDetail(work) {
      console.log(`[PortfolioList] click detail work ${work.id}`);
      this.$emit('goPortfolioDetail', work)
    }
  }
};

var TIME_INTERVAL = 2000;

function setNextPortfolio(works, nextIdx, interval) {
  setProgressbarAnimation(interval, function() {
    var sizeOfWorks = works.length;
    var next = nextIdx;
    if (next >= sizeOfWorks) {
      next = 0;
    }

    works.forEach(element => {
      element.isActive = false;
    });
    works[next].isActive = true;
    setNextPortfolio(works, ++next, interval);
  });
}

function setProgressbarAnimation(interval, onFinishedCallback) {
  return;
}
</script>

<style>
#portfolio-list > ul {
  list-style: none;
  height: 100%;
  white-space: nowrap;
  position: relative;
  margin: 0;
  padding: 0;
}

</style>
