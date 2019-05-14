<template>
  <!-- Portfolio -->
  <div id='portfolio' class='container'>
    <div class='portfolio-background'></div>

    <portfolio-list
      v-on:goPortfolioDetail="goPortfolioDetail($event)"
    />
    
    <portfolio-detail
      v-bind:work="detailWork"
    />


  </div>
</template>

<script>
import works from '../assets/json/works.json'
import PortfolioList from '@/components/portfolio/PortfolioList.vue'
import PortfolioDetail from '@/components/portfolio/PortfolioDetail.vue'

export default {
  name: 'Portfolio',
  components: { 
    'portfolio-list': PortfolioList,
    'portfolio-detail': PortfolioDetail
  },
  data () {
    return {
      works: works,
      route: this.$route.params,
      detailWork: {
        'a': 1
      }
    }
  },
  methods: {
    isDetailPage: function() {
      if (this.route.id == null || this.route.id == undefined || this.route.id.length == 0) {
        return false;
      }

      return true;
      // return !this.route.id
    },
    goPortfolioDetail(work) {
      console.log(`[Portfolio] click detail work ${work.id}`);
      console.log(work);
      this.detailWork = work;
    }
  },
  created () {
    //console.log('Portfolio created')
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
#portfolio {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0px;
  overflow: hidden;
}

#portfolio-list > ul {
  list-style: none;
  height: 100%;
  white-space: nowrap;
  position: relative;
}

#portfolio-list-item {
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden;
}

#portfolio-list-item.active {
  visibility: visible;
}

.portfolio-background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #ffdbc6;
  transition: width 0.58s cubic-bezier(0.19, 1, 0.22, 1),
    height 1.1s cubic-bezier(0.19, 1, 0.22, 1),
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  border: red 1px solid;
}

.portfolio-slider {
  position: absolute;
  margin-left: 20%;
  margin-bottom: 10%;
  bottom: 0px;
}

#portfolio-timer-progressbar {
  position: absolute;
  height: 10px;
  width: 100%;
  background-color: white;
  bottom: 0px;
  border: 1px solid black;
}

#portfolio-timer-progress {
  width: 0%;
  background-color: #4a90e2;
  height: 100%;
  border-color: #4a90e2;
}
</style>
