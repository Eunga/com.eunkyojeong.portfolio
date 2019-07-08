<template>
    <div></div>    
</template>

<script>
export default {
    name: "Workbase",
    mounted() {
        $('.portfolio-item-detail-temp').hide();

        window.scrollTo(0, 0);
        $(document).ready(function() {
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

            /* Every time the window is scrolled ... */
            $(window).scroll( function(){
                /* Check the location of each desired element */
                let isFirstChecked = false;
                $('.portfolio-work').each( function(i) {
                    if (i==0) {
                        return;
                    }

                    const bottom_of_object = $(this).position().top + $(this).outerHeight();
                    const bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if (bottom_of_window > bottom_of_object + 800) {
                        $(this).animate({
                            opacity: 1,
                            top: -10
                        }, 700, 'easeInOutQuad');
                    }
                }); 
            
            });
            
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
    opacity: 0;
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

.portfolio-work-wrap {
    position: relative;
}

.portfolio-work-wrap:nth-child(even) {
    background-color: #F0F0F0;
}

.portfolio-work-wrap:nth-child(odd) {
    background-color: white;
}

.portfolio-work-meta-label {
    /* width: 30px; */
    font-weight: bold;
    display: inline-block;
}


.portfolio-works {
  font-family: HelveticaNeue;
  font-size: 20px;
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
