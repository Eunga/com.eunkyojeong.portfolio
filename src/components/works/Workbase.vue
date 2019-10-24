<template>
  <div></div>
</template>

<script>
export default {
  name: "Workbase",
  mounted() {
    $(".portfolio-item-detail-temp").hide();

    window.scrollTo(0, 0);
    $(document).ready(function($) {
      $(".portfolio-work")
        .eq(0)
        .animate(
          {
            opacity: 1,
            top: -10
          },
          500
        );

      // Function which adds the 'animated' class to any '.animatable' in view
      const doAnimations = function() {
        // Calc current offset and get all animatables
        const offset = $(window).scrollTop() + $(window).height(),
          $animatables = $(".portfolio-item-detail .animatable");

        const $autoPlayVideos = $('.autoPlayVideo video');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
          $(window).off("scroll", doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
          const $animatable = $(this);
          if ($animatable.offset().top + 150 < offset) {
            $animatable.removeClass("animatable").addClass("animated");
          }
        });

        $autoPlayVideos.each(function() {
          const $autoPlayVideo = $(this);
          const heightOfThis = $autoPlayVideo.height();
          // 60% 정도 보였을 때만 play하도록 한다.
          if ($autoPlayVideo.offset().top + heightOfThis/1.6 < offset &&
              $autoPlayVideo.offset().top + heightOfThis/0.6 > offset) {
            $autoPlayVideo[0].play();
          } else {
            $autoPlayVideo[0].pause();
          }
        });
      };

      // Hook doAnimations on scroll, and trigger a scroll
      setTimeout(() => {
        $(window).on("scroll", doAnimations);
        $(window).trigger("scroll");
      }, 500);
    });
  }
};
</script>

<style>
.portfolio-work {
  padding-top: 120px;
  padding-bottom: 100px;
  /* margin: auto; */

  /* 로딩 되면서, 위로 fadein & translateY 하기 위함 */
  position: relative;
  /* opacity: 0; */
  top: 10px;
}

.portfolio-work-wrap img,
.portfolio-work img {
  width: 100%;
}

.portfolio-work-title {
  font-size: 22px;
  font-family: HelveticaNeue;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -0.3px;
  text-align: left;
  flex: 1;
}

.subtitle-sm {
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 30px;
}

.subtitle-lg {
  font-family: Questrial;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.4px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.subtitle.subtitle-sm {
  padding-bottom: 0px;
}

.portfolio-work-wrap {
  position: relative;
  background-color: white;
}

.portfolio-work-wrap:last-child {
  margin-bottom: 0px;
}


.portfolio-work-meta-label {
  font-weight: bold;
  display: inline-block;
}

.portfolio-works {
  font-family: HelveticaNeue;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.7;
  letter-spacing: -0.2px;
}

video:focus {
  outline: none;
}

.work-solution-align {
  margin-bottom: 60px;
}

.work-one-image {
  margin-top: 60px;
}

.work-date {
  margin-bottom: 40px;
}

@media (max-width: 767px) {
  .portfolio-works {
    font-size: 14px;
  }

  .portfolio-work {
    padding-top: 60px;
  }

  .subtitle-sm {
    font-size: 15px;
  }

  .subtitle-lg {
    font-size: 28px;
  }
}

@media screen and (max-width: 1023px) {
  .portfolio-work-wrap img,
  .portfolio-work img {
    margin-top: 10px;
  }

  .work-date {
    margin-bottom: 0px;
  }

  .work-one-image {
    margin-top: 30px;
  }

  .portfolio-work {
    padding-bottom: 20px;
  }

  .subtitle-lg {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .subtitle-sm {
    padding-bottom: 15px;
  }

  .portfolio-work-wrap:last-child {
    margin-bottom: 60px;
  }
}

@media screen and (min-width: 1024px) {
  .work-solution-align {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 1023px) {
}

/* My Grid */
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-xs,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
}

/* Media Queries */
/* xl */
@media screen and (min-width: 1777px) {
  .hidden-xl {
    display: none !important;
  }

  /* order */
  .order-xl-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .order-xl-last {
    -ms-flex-order: 13;
    order: 13;
  }

  /* offset */
  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.333333%;
  }

  .offset-xl-2 {
    margin-left: 16.66666%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.333333%;
  }

  /* column */
  .col-xl-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-xl-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-xl-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-8 {
    -ms-flex: 0 0 66.666666%;
    flex: 0 0 66.666666%;
    max-width: 66.666666%;
  }

  .col-xl-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* lg */
@media screen and (max-width: 1776px) {
  .hidden-lg {
    display: none !important;
  }

  /* order */
  .order-lg-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .order-lg-last {
    -ms-flex-order: 13;
    order: 13;
  }

  /* offset */
  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.333333%;
  }

  .offset-lg-2 {
    margin-left: 16.66666%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.333333%;
  }

  /* column */
  .col-lg-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-lg-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-8 {
    -ms-flex: 0 0 66.666666%;
    flex: 0 0 66.666666%;
    max-width: 66.666666%;
  }

  .col-lg-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* md */
@media screen and (max-width: 1439px) {
  .hidden-md {
    display: none !important;
  }

  /* order */
  .order-md-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .order-md-last {
    -ms-flex-order: 13;
    order: 13;
  }

  /* offset */
  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.333333%;
  }

  .offset-md-2 {
    margin-left: 16.66666%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.333333%;
  }

  /* column */
  .col-md-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-md-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-8 {
    -ms-flex: 0 0 66.666666%;
    flex: 0 0 66.666666%;
    max-width: 66.666666%;
  }

  .col-md-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* sm */
@media screen and (max-width: 1023px) {
  .hidden-sm {
    display: none !important;
  }

  /* order */
  .order-sm-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .order-sm-last {
    -ms-flex-order: 13;
    order: 13;
  }

  /* offset */
  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.333333%;
  }

  .offset-sm-2 {
    margin-left: 16.66666%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.333333%;
  }

  /* column */
  .col-sm-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-sm-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-8 {
    -ms-flex: 0 0 66.666666%;
    flex: 0 0 66.666666%;
    max-width: 66.666666%;
  }

  .col-sm-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-sm-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  /* other */
  .work-meta-sm {
    margin-bottom: 60px;
  }
}

/* xs */
@media screen and (max-width: 767px) {
  /* .visible-xs {
    display: block !important;
  } */
  .hidden-xs {
    display: none !important;
  }

  /* order */
  .order-xs-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .order-xs-last {
    -ms-flex-order: 13;
    order: 13;
  }

  /* offset */
  .offset-xs-0 {
    margin-left: 0;
  }

  .offset-xs-1 {
    margin-left: 8.333333%;
  }

  .offset-xs-2 {
    margin-left: 16.66666%;
  }

  .offset-xs-3 {
    margin-left: 25%;
  }

  .offset-xs-4 {
    margin-left: 33.333333%;
  }

  /* column */
  .col-xs-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-xs-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xs-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-xs-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xs-8 {
    -ms-flex: 0 0 66.666666%;
    flex: 0 0 66.666666%;
    max-width: 66.666666%;
  }

  .col-xs-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xs-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* Common Offset */
.offset-right-12 {
  margin-right: 100%;
}
.offset-right-11 {
  margin-right: 91.66666667%;
}
.offset-right-10 {
  margin-right: 83.33333333%;
}
.offset-right-9 {
  margin-right: 75%;
}
.offset-right-8 {
  margin-right: 66.66666667%;
}
.offset-right-7 {
  margin-right: 58.33333333%;
}
.offset-right-6 {
  margin-right: 50%;
}
.offset-right-5 {
  margin-right: 41.66666667%;
}
.offset-right-4 {
  margin-right: 33.33333333%;
}
.offset-right-3 {
  margin-right: 25%;
}
.offset-right-2 {
  margin-right: 16.66666667%;
}
.offset-right-1 {
  margin-right: 8.33333333%;
}
.offset-right-0 {
  margin-right: 0;
}
@media (max-width: 767px) {
  .offset-xs-right-12 {
    margin-right: 100%;
  }
  .offset-xs-right-11 {
    margin-right: 91.66666667%;
  }
  .offset-xs-right-10 {
    margin-right: 83.33333333%;
  }
  .offset-xs-right-9 {
    margin-right: 75%;
  }
  .offset-xs-right-8 {
    margin-right: 66.66666667%;
  }
  .offset-xs-right-7 {
    margin-right: 58.33333333%;
  }
  .offset-xs-right-6 {
    margin-right: 50%;
  }
  .offset-xs-right-5 {
    margin-right: 41.66666667%;
  }
  .offset-xs-right-4 {
    margin-right: 33.33333333%;
  }
  .offset-xs-right-3 {
    margin-right: 25%;
  }
  .offset-xs-right-2 {
    margin-right: 16.66666667%;
  }
  .offset-xs-right-1 {
    margin-right: 8.33333333%;
  }
  .offset-xs-right-0 {
    margin-right: 0;
  }
}

@media (min-width: 768px) {
  .offset-sm-right-12 {
    margin-right: 100%;
  }
  .offset-sm-right-11 {
    margin-right: 91.66666667%;
  }
  .offset-sm-right-10 {
    margin-right: 83.33333333%;
  }
  .offset-sm-right-9 {
    margin-right: 75%;
  }
  .offset-sm-right-8 {
    margin-right: 66.66666667%;
  }
  .offset-sm-right-7 {
    margin-right: 58.33333333%;
  }
  .offset-sm-right-6 {
    margin-right: 50%;
  }
  .offset-sm-right-5 {
    margin-right: 41.66666667%;
  }
  .offset-sm-right-4 {
    margin-right: 33.33333333%;
  }
  .offset-sm-right-3 {
    margin-right: 25%;
  }
  .offset-sm-right-2 {
    margin-right: 16.66666667%;
  }
  .offset-sm-right-1 {
    margin-right: 8.33333333%;
  }
  .offset-sm-right-0 {
    margin-right: 0;
  }
}
@media (min-width: 1024px) {
  .offset-md-right-12 {
    margin-right: 100%;
  }
  .offset-md-right-11 {
    margin-right: 91.66666667%;
  }
  .offset-md-right-10 {
    margin-right: 83.33333333%;
  }
  .offset-md-right-9 {
    margin-right: 75%;
  }
  .offset-md-right-8 {
    margin-right: 66.66666667%;
  }
  .offset-md-right-7 {
    margin-right: 58.33333333%;
  }
  .offset-md-right-6 {
    margin-right: 50%;
  }
  .offset-md-right-5 {
    margin-right: 41.66666667%;
  }
  .offset-md-right-4 {
    margin-right: 33.33333333%;
  }
  .offset-md-right-3 {
    margin-right: 25%;
  }
  .offset-md-right-2 {
    margin-right: 16.66666667%;
  }
  .offset-md-right-1 {
    margin-right: 8.33333333%;
  }
  .offset-md-right-0 {
    margin-right: 0;
  }
}
@media (min-width: 1440px) {
  .offset-lg-right-12 {
    margin-right: 100%;
  }
  .offset-lg-right-11 {
    margin-right: 91.66666667%;
  }
  .offset-lg-right-10 {
    margin-right: 83.33333333%;
  }
  .offset-lg-right-9 {
    margin-right: 75%;
  }
  .offset-lg-right-8 {
    margin-right: 66.66666667%;
  }
  .offset-lg-right-7 {
    margin-right: 58.33333333%;
  }
  .offset-lg-right-6 {
    margin-right: 50%;
  }
  .offset-lg-right-5 {
    margin-right: 41.66666667%;
  }
  .offset-lg-right-4 {
    margin-right: 33.33333333%;
  }
  .offset-lg-right-3 {
    margin-right: 25%;
  }
  .offset-lg-right-2 {
    margin-right: 16.66666667%;
  }
  .offset-lg-right-1 {
    margin-right: 8.33333333%;
  }
  .offset-lg-right-0 {
    margin-right: 0;
  }
}
@media (min-width: 1777px) {
  .offset-xl-right-12 {
    margin-right: 100%;
  }
  .offset-xl-right-11 {
    margin-right: 91.66666667%;
  }
  .offset-xl-right-10 {
    margin-right: 83.33333333%;
  }
  .offset-xl-right-9 {
    margin-right: 75%;
  }
  .offset-xl-right-8 {
    margin-right: 66.66666667%;
  }
  .offset-xl-right-7 {
    margin-right: 58.33333333%;
  }
  .offset-xl-right-6 {
    margin-right: 50%;
  }
  .offset-xl-right-5 {
    margin-right: 41.66666667%;
  }
  .offset-xl-right-4 {
    margin-right: 33.33333333%;
  }
  .offset-xl-right-3 {
    margin-right: 25%;
  }
  .offset-xl-right-2 {
    margin-right: 16.66666667%;
  }
  .offset-xl-right-1 {
    margin-right: 8.33333333%;
  }
  .offset-xl-right-0 {
    margin-right: 0;
  }
}
</style>
