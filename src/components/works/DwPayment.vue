<template>
    <div class="porfolio-works">
        <!-- Overview -->
        <div class="porfolio-work-wrap">
            <div class="porfolio-work container row">
                <div class="col-md-6">
                    <div>
                        <strong>Overview</strong>
                    </div>
                    <div>
                        In 2018 summer, Daum Webtoon has finally introduced the new payment service for users to purchase the paid contents via iOS app as well as web app. For this service, I have designed the UI and the process for purchasing pay contents and recharging Webtoon Cash (Cash). Then, I made some improvements to the existing design as every design should be updated, and eventually I had a chance to present a better idea for the enhanced version of purchasing pay contents.
                        All information in this case study is my own and does not necessarily reflect the views of Daum Webtoon Company.
                    </div>
                </div>

                <div class="col-md-6">
                    <div>
                        <strong>Date</strong>
                        <span>December 2018</span>
                    </div>

                    <div>
                        <strong>Role</strong>
                        <span>Product Designer</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Challenge -->
        <div class="porfolio-work-wrap">
            <div class="porfolio-work container row">
                <div class="col-md-12">
                    <strong>Challenge</strong>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <strong>Better usability for heavy users</strong>
                    </div>

                    <div class="col-md-8">
                        Since the successful launch of Daum Webtoon 2.0, it had provided improvements of the user experience for all users which brought a sharp 200% increase in comics sales. Our next goal was to upgrade the app for heavy users who use every day and purchase a large volume of our pay comics.

                        and the basic goal was to : 
                        Provide users with app that allows them to fully focus on reading and only reading which we believe is the core value of the service.
                    </div>
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
    padding-top:50px;
    padding-bottom:50px;
    margin: auto;
}

.porfolio-work-wrap:nth-child(even) {
    background-color: #F0F0F0;
}

.porfolio-work-wrap:nth-child(odd) {
    background-color: white;
}

</style>
