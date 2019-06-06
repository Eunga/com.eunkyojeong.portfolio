<template>
    <div class="portfolio-item-detail row">
        <div class="col-md-12">
            <component v-bind:is="comp"/>
        </div>

        <div class="portfolio-item-nav container">
            <div class="portfolio-item-nav-item portfolio-item-nav-prev" v-on:click="goOtherWork(prev)">
                <div class="portfolio-item-nav-id">
                    {{ formatedNumber(prev.id) }}
                </div>

                <div class="portfolio-item-nav-title">
                    {{ prev.title }}
                </div>
            </div>            
            <div class="portfolio-item-nav-item portfolio-item-nav-next" v-on:click="goOtherWork(next)">
                <div class="portfolio-item-nav-id">
                    {{ formatedNumber(next.id) }}
                </div>

                <div class="portfolio-item-nav-title">
                    {{ next.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioItemDetail',
    props: {
        work: {
            type: Object,
            required: true
        },
    },
    watch: {
        $route (to, from) {
            window.scrollTo(0, 0);
        }
    },
    computed: {
        currentId: function() {
            return this.work.id;
        },
        prev: function() {
            let prevId = this.currentId-1;
            if (prevId <= 0) {
                prevId = this.$store.getters.length;
            }
            
            const work =  this.$store.getters.allWorks.filter(work => work.id == prevId);
            return work[0];
        },
        next: function() {
            let nextId = this.currentId+1;
            if (nextId > this.$store.getters.length) {
                nextId = this.$store.getters.length;
            }
            
            const work =  this.$store.getters.allWorks.filter(work => work.id == nextId);
            return work[0];
        },  
        name: function() {
            return this.work.name;
        },
        comp () {
            let comp = null;
            try {
                comp = () => import(`@/components/works/${this.name}.vue`);
            } catch (e) {
                console.log(e);
            }

            console.log("this.name: " + this.name);
            return comp;
        }
    },
    methods: {
        goOtherWork(work) {
            this.$router.push({ path: `/portfolio/${work.path}`});
        },
        formatedNumber(number) {
        var countStr;
        if (number < 10) {
            countStr = '0' + number;
        } else {
            countStr = '' + number;
        }

        return countStr;
        }
    }
}

$(document).ready(function() {
  'use strict';
  
   let prevScrollTop = 0;
   const $navbar = $('#header');
   const navbarHeight = $navbar.height();

   $(window).scroll(function () {
      var currentScrollTop = $(window).scrollTop();
      
      // Scroll Down
      if (prevScrollTop < currentScrollTop 
          && currentScrollTop > 2*navbarHeight) {
        $navbar.addClass("hide");
      } // Scroll Up
      else if (prevScrollTop > currentScrollTop
          && !(currentScrollTop <= navbarHeight)) {
        $navbar.removeClass("hide");
      }

      prevScrollTop = currentScrollTop;
  });
});
</script>

<style>

.portfolio-item-nav-item {
    display: inline-block;
    max-width: 300px;
}

.portfolio-item-nav-item:hover {
    cursor: pointer;
    opacity: 0.7;
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
  line-height: 3;
  letter-spacing: normal;
  color: #aaaaaa;
}

.portfolio-item-nav-title {
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: var(--black);
}


</style>

