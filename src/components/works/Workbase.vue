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
  padding-bottom: 120px;
  /* margin: auto; */

  /* 로딩 되면서, 위로 fadein & translateY 하기 위함 */
  position: relative;
  /* opacity: 0; */
  /* top: 10px; */
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

.work-image-footnote {
  color:#bbbbbb; 
  text-align:center;
}

.work-image-footnote-xl {
  font-size: 22px;
  font-weight: bold;
}

.work-image-footnote-lg {
  font-size: 16px; 
  font-weight: bold;
}

.work-image-footnote-sm {
  font-size: 14px;
}

video:focus {
  outline: none;
}

.work-solution-align {
  margin-bottom: 160px;
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
    padding-bottom: 60px;
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
    padding-bottom: 60px;
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
    /* justify-content: center; */
  }
}
</style>
