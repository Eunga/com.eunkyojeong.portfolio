<template>
  <div id='portfolio'>
    <portfolio-list
      v-on:goPortfolioDetail="goPortfolioDetail($event)"/>

    <div id="portfolio-bottom-mask">
    </div>
  </div>
</template>

<script>
import works from '../assets/json/works.json'
import PortfolioList from '@/components/portfolio/PortfolioList.vue'

export default {
  name: 'Portfolio',
  components: { 
    'portfolio-list': PortfolioList
  },
  data () {
    return {
      works: works,
    }
  },
  methods: {
    isDetailPage: function() {
      if (this.route.id == null || this.route.id == undefined || this.route.id.length == 0) {
        return false;
      }

      return true;
    },
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
#portfolio {
  position: relative;
  margin: 0 auto;
  padding: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  height: calc(100vh - 60px);

  transition: all .3s ease-in;
}

#portfolio.transition {
  /* height: 650px; */

}

#portfolio-bottom-mask {
  position: absolute;
  width:100%;
  height:100%;
  background-color: white;
  transition: all .3s ease-in;
  top:100%;
}

#portfolio.transition #portfolio-bottom-mask {
  transition: all .3s ease-in;
  top: 544px;
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
