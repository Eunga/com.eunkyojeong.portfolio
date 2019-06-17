<template>
    
</template>

<script>
export default {
    name: "Workbase",
    mounted() {
        console.log('Workbase mounted');
        // const $navbar = $('#header');
        // $navbar.addClass('hide');
    
        console.log(`this.isRefreshing => ${this.isRefreshing}`);
        $(document).ready(function() {
            'use strict';
            
            let prevScrollTop = 0;
            const $navbar = $('#header');
            const navbarHeight = $navbar.height();

            $(window).scroll(function () {
                const currentScrollTop = $(window).scrollTop();
                
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
    },
}
</script>

<style>

</style>
