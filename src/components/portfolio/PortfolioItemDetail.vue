<template>
    <div class="portfolio-item-detail row">
        <div class="portfolio-item-detail-temp"></div>
        <div class="col-md-12">
            <component :is="comp"/>
        </div>
        
        <div class="portfolio-item-nav container">
            <div class="portfolio-item-nav-item portfolio-item-nav-prev" v-on:click="goOtherWork(prev)">
                <div class="portfolio-item-nav-id">
                    {{ formatedNumber(prev.id + 1) }}
                </div>

                <div class="portfolio-item-nav-title">
                    {{ prev.title }}
                </div>
            </div>            
            <div class="portfolio-item-nav-item portfolio-item-nav-next" v-on:click="goOtherWork(next)">
                <div class="portfolio-item-nav-id">
                    {{ formatedNumber(next.id + 1) }}
                </div>

                <div class="portfolio-item-nav-title">
                    {{ next.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
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
                console.log(e);
            }

            return comp;
        }
    },
    methods: {
        goOtherWork(work) {
            this.$router.push({ path: `/portfolio/${work.path}`});
        },
        formatedNumber(number) {
            let countStr;
            if (number < 10) {
                countStr = '0' + number;
            } else {
                countStr = '' + number;
            }

            return countStr;
        }
    }
}

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
  color: #000000
}

.portfolio-item-detail-temp {
    position: relative;
    min-height: 1000px;
    width: 100%;
    
}

</style>

