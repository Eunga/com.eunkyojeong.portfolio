<template>
    <div class="porfolio-works">
        <!-- Overview -->
        <div class="porfolio-work-wrap">
            <div class="porfolio-work container row">
                <div class="col-md-6">
                    <div>
                        <span class="portfolio-work-subtitle-sm">Overview</span>
                    </div>
                    <div>
                        ‘Offin’ is an app on a platform for an online open market available only for offline stores. It’s like an ‘online showroom’ but you can also make payments for purchase. 
                        <br/>
                        I joined the team as the one and only designer. I could work with the developers very closely as we built iOS and Android apps and a website. We were very thrilled and inspired to create a new shopping experience. 
                    </div>
                </div>

                <div class="col-md-6" style="padding-left:10%;">
                    <div>
                        <span class="portfolio-work-meta-label">Date</span>
                        <span>June 2014</span>
                    </div>

                    <div>
                        <span class="portfolio-work-meta-label">Role</span>
                        <span>Product Designer</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Challenge -->
        <div class="porfolio-work-wrap">
            <div class="porfolio-work container row">
                <div class="col-md-4">
                    
                </div>

                <div class="row col-md-8">
                    <div class="col-md-12">
                        <span class="portfolio-work-subtitle-sm">The Problem</span>
                    </div>

                    <div style="width:500px; margin: auto;">
                        There are so many offline clothing stores in Korea that have no brand names. We called them ‘Bo-se’ in Korean. For these stores, we wondered how people could find them and their products without actually having to have to visit the store. 
                    </div>

                    <div style="width:500px; margin: auto;">
                        (According to the study / research) The study has found that ____ percentage of Koreans were shopping at non-branded clothing stores compared to branded stores. 
                    </div>

                    <div style="width:500px; margin: auto;">
                        While the branded stores have their own online websites, most of non-branded stores don’t have websites unless they are major stores like Stylenanda or Imvely. 
                        <br/>
                        So, there was no way for customers to find and purchase the clothes that they have seen from offline stores online, and for store owners to offer their products to potential customers other than in the form of offline stores. 
                    </div>
                </div>
            </div>
        </div>


        <!-- The Problem -->
        <div class="porfolio-work-wrap">
            <div class="porfolio-work container row">
                <div class="col-md-3">
                    <span class="portfolio-work-subtitle-sm">The Problem</span>
                </div>

                <div class="col-md-9">
                    <div>
                        <span class="portfolio-work-subtitle-lg">Right from the user</span>
                    </div>

                    <div style="margin-bottom:124px;">
                        "Whenever I was binge-reading the Webtoon, the pop-ups kept popping up asking me to pay 200KRW every time I try to get to the following episodes. Sometimes I gave up reading when I felt lazy to make each purchase for each episode."
                    </div>


                    <div>
                        <span class="portfolio-work-subtitle-lg">Pain Point</span>
                    </div>

                    <div>
                        When you are reading in the view page and if you are willing to make payments for the pay episodes, it can be cumbersome to go through the same payment process over and over again, which usually breaks the flow which is a huge distraction for readers.
                    </div>
                </div>

                <div style="margin:auto; margin-top:80px; text-align:center;">
                    <img src="../../assets/img/portfolio/dw/portfolio-dw-painpoint.png" alt="painpoint"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Workbase from "./Workbase.vue";

export default {
    name: 'Offin',
    extends: Workbase,
    mounted() {
        console.log('Offin mounted');
    }
}
</script>

<style>
.porfolio-work {
    padding-top:120px;
    padding-bottom:100px;
    margin: auto;
}

.portfolio-work-subtitle-sm {
    font-size: 22px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 30px;
}

.portfolio-work-subtitle-lg {
    display: inline-block;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: -0.4px;
    text-align: left;
    margin-bottom: 30px;
}

.porfolio-work-wrap:nth-child(even) {
    background-color: #F0F0F0;
}

.porfolio-work-wrap:nth-child(odd) {
    background-color: white;
}

.portfolio-work-meta-label {
    width: 70px;
    font-weight: bold;
    display: inline-block
}

</style>
