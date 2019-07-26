<template>
    <div></div>    
</template>

<script>
export default {
    name: "Workbase",
    mounted() {
        $('.portfolio-item-detail-temp').hide();

        window.scrollTo(0, 0);
        $(document).ready(function($) {
            $('.portfolio-work').eq(0).animate({
                opacity: 1,
                top: -10
            }, 500);

            $('#footer').css({
                opacity: 0
            });
            $('#footer').animate({
                opacity: 1,
            }, 500);

            // Function which adds the 'animated' class to any '.animatable' in view
            const doAnimations = function() {
                // Calc current offset and get all animatables
                const offset = $(window).scrollTop() + $(window).height(),
                    $animatables = $('.animatable');
                
                // Unbind scroll handler if we have no animatables
                if ($animatables.length == 0) {
                    $(window).off('scroll', doAnimations);
                }
                
                // Check all animatables and animate them if necessary
                $animatables.each(function(i) {
                    const $animatable = $(this);
                    if (($animatable.offset().top + 150) < offset) {
                    // if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                        $animatable.removeClass('animatable').addClass('animated');
                    }
                });

            };

            // Hook doAnimations on scroll, and trigger a scroll
            $(window).on('scroll', doAnimations);
            $(window).trigger('scroll');

            
        });
    },
}
</script>

<style>
.portfolio-work {
    padding-top:120px;
    padding-bottom:100px;
    margin: auto;

    /* 로딩 되면서, 위로 fadein & translateY 하기 위함 */
    position: relative;
    /* opacity: 0; */
    top: 10px;
}

.portfolio-work-wrap img, .portfolio-work img {
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
  margin-bottom: 30px;
}

.subtitle-lg {
    font-family: Questrial;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.4px;
    margin-bottom: 30px;
}

.subtitle.subtitle-sm {
    margin-bottom: 0px;
}

.portfolio-work-wrap {
    position: relative;
}

.portfolio-work-wrap {
    background-color: white;
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


</style>
