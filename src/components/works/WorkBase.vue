<template>
    
</template>

<script>
export default {
    name: "Workbase",
    mounted() {
        console.log('Workbase mounted');
        $('.portfolio-item-detail-temp').hide();

        window.scrollTo(0, 0);
        $(document).ready(function() {
            $('.porfolio-work').eq(0).animate({
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
                $('.porfolio-work').each( function(i) {
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

</style>
