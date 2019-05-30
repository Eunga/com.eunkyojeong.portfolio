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
                        In 2018 summer, Daum Webtoon has finally introduced the new payment service for users to purchase the paid contents via iOS app as well as web app. For this service, I have designed the UI and the process for purchasing pay contents and recharging Webtoon Cash (Cash). Then, I made some improvements to the existing design as every design should be updated, and eventually I had a chance to present a better idea for the enhanced version of purchasing pay contents.
                        <br/>
                        <br/>
                        <i>All information in this case study is my own and does not necessarily reflect the views of Daum Webtoon Company.</i>
                    </div>
                </div>

                <div class="col-md-6" style="padding-left:10%;">
                    <div>
                        <span class="portfolio-work-meta-label">Date</span>
                        <span>December 2018</span>
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
                <div class="col-md-12">
                    <span class="portfolio-work-subtitle-sm">Challenge</span>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <span class="portfolio-work-subtitle-lg">Better usability for heavy users</span>
                    </div>

                    <div style="width:500px; margin: auto;">
                        Since the successful launch of Daum Webtoon 2.0, it had provided improvements of the user experience for all users which brought a sharp 200% increase in comics sales. Our next goal was to upgrade the app for heavy users who use every day and purchase a large volume of our pay comics.
                        <br/><br/>
                        and the basic goal was to : 
                        Provide users with app that allows them to fully focus on reading and only reading which we believe is the core value of the service.
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
export default {
    name: 'DwPayment',
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
