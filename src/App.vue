<template>
  <div id="app">
    <!-- Header -->
    <app-header />

    <!-- Routher View -->
    <transition
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
      @beforeLeave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
      v-bind:css="false"
      :name="shouldTransition ? 'fade' : ''"
      mode="out-in"
    >
      <router-view :key="$route.name"></router-view>
    </transition>

    <!-- Footer -->
    <app-footer />
  </div>
</template>

<script>
;

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import TransitionEvent from "@/components/TransitionEvent";

import store from "./store";
import { setTimeout } from "timers";

// Transition을 적용하지 않을 $router.name
const exceptTransitionList = ["about"];
export default {
  store,
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data: function() {
    return {
      shouldTransition: true,
      transitionEvent: new TransitionEvent()
    };
  },
  watch: {
    $route(to, from) {
      if (to.name == "home" || to.name == "portfolio") {
        $("body").addClass("overflowHidden");
      } else {
        $("body").removeClass("overflowHidden");
      }

      if (to.name != "portfolio-detail") {
        var windowHeight = window.innerHeight;
        var metaHeight = windowHeight - 120;
        $("#portfolio-meta").css({ height: metaHeight });
      }

      if (exceptTransitionList.includes(to.name)) {
        this.shouldTransition = false;
      } else {
        this.shouldTransition = true;
      }
    }
  },
  mounted() {
    const path = this.$route.name;
    if (path == "home") {
      $("body").addClass("overflowHidden");
    } else {
      $("body").removeClass("overflowHidden");
    }

    $(document).ready(function() {
      const widthOfWindow = window.innerWidth;
      if (widthOfWindow < 768) {
          $('body').addClass('mobileAnim');
      } else {
          $('body').removeClass('mobileAnim');
      }

      window.addEventListener("resize", function(e) {
        const widthOfWindow = window.innerWidth;
        // 모바일일 경우에는 모든 animation 속도를 30% 빠르게 한다.
        // animation 속도는 .3s 로 대개 고정되었기 때문에 0.2s 로 줄인다.
        if (widthOfWindow < 768) {
          $('body').addClass('mobileAnim');
        } else {
          $('body').removeClass('mobileAnim');
        }
      });
    });
  },
  methods: {
    // --------
    // ENTERING
    // --------
    beforeEnter: function(el) {
      const srcPath = $(el).attr("id");
      const destPath = this.$route.name;

      this.transitionEvent.beforeEnter(srcPath, destPath);
      this.$TransitionEventBus.$emit("beforeEnter");
    },
    // done 콜백은 CSS와 함께 사용할 때 선택 사항입니다.
    enter: function(el, done) {
      const srcPath = $(el).attr("id");
      const destPath = this.$route.name;

      this.transitionEvent.enter(srcPath, destPath, () => {
        done();
      });
      this.$TransitionEventBus.$emit("enter");
    },
    afterEnter: function(el) {
      const srcPath = $(el).attr("id");
      const destPath = this.$route.name;

      this.transitionEvent.afterEnter(srcPath, destPath);
      this.$TransitionEventBus.$emit("afterEnter");
    },

    // --------
    // LEAVING
    // --------
    beforeLeave: function(el) {
      const srcPath = $(el).attr("id");
      const destPath = this.$route.name;

      this.transitionEvent.beforeLeave(srcPath, destPath);
      this.$TransitionEventBus.$emit("beforeLeave");
    },

    // done 콜백은 CSS와 함께 사용할 때 선택 사항입니다.
    leave: function(el, done) {
      const srcPath = $(el).attr("id");
      const destPath = this.$route.name;

      this.transitionEvent.leave(srcPath, destPath, () => {
        done();
      });
      this.$TransitionEventBus.$emit("leave");
    },
    afterLeave: function(el) {
      const srcPath = $(el).attr("id");
      const destPath = this.$route.name;

      this.transitionEvent.afterLeave(srcPath, destPath);
      this.$TransitionEventBus.$emit("afterLeave");
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Questrial";
  height: 100%;
  
  overscroll-behavior-y: contain;
  -webkit-overflow-scrolling: touch;
}

body.overflowHidden {
  overflow: hidden;
  
}

#app {
  transition: all 0.3s ease-in-out;
  height: 100%;
}

#content {
  height: 80%;
  padding: 0px !important;
  margin-left: 120px;
  margin-right: 120px;
}

ul {
  padding: 0px;
  margin: 0;
}

/* For fluid */
.v-container-fluid {
  max-width: 1296px;
  margin: auto;
  /* box-shadow: 5px 5px red inset; */
}

/* Media Queries */
@media screen and (max-width: 767px) {
  .v-container-fluid {
    max-width: 707px;
    margin-left: 30px;
    margin-right: 30px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .v-container-fluid {
    max-width: 1159px;
    margin-left: 60px;
    margin-right: 60px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .v-container-fluid {
    max-width: 1119px;
    margin-left: 160px;
    margin-right: 160px;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  .v-container-fluid {
    margin-left: 240px;
    margin-right: 240px;
  }
}

@media screen and (min-width: 1777px) {
  .v-container-fluid {
    width: 1296px;
    margin: auto;
  }
}

/* Override Bootstrap */
.row > [class*="col"] {
  padding-right: 0;
  padding-left: 0;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

/* Animatable */
.animatable {
  /* initially hide animatable objects */
  visibility: hidden;

  /* initially pause animatable objects their animations */
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -ms-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

/* show objects being animated */
.animated {
  visibility: visible;

  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;

  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
  -ms-animation-play-state: running;
  -o-animation-play-state: running;
  animation-play-state: running;
}

.mobileAnim .animated {
  -webkit-animation-duration: 0.7s;
  -moz-animation-duration: 0.7s;
  -ms-animation-duration: 0.7s;
  -o-animation-duration: 0.7s;
  animation-duration: 0.7s;
}

/* CSS Animations (extracted from http://glifo.uiparade.com/) */
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@-moz-keyframes fadeInDown {
  0% {
    opacity: 0;
    -moz-transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}

@-o-keyframes fadeInDown {
  0% {
    opacity: 0;
    -o-transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
  }
  60% {
    -webkit-transform: translateX(20px);
  }

  80% {
    -webkit-transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@-moz-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -moz-transform: translateX(-2000px);
  }

  60% {
    -moz-transform: translateX(20px);
  }

  80% {
    -moz-transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}

@-o-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -o-transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    -o-transform: translateX(20px);
  }

  80% {
    -o-transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    -o-transform: translateX(0);
  }
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }

  60% {
    transform: translateX(20px);
  }

  80% {
    transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@-webkit-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
  }

  60% {
    -webkit-transform: translateX(-20px);
  }

  80% {
    -webkit-transform: translateX(5px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@-moz-keyframes bounceInRight {
  0% {
    opacity: 0;
    -moz-transform: translateX(2000px);
  }

  60% {
    -moz-transform: translateX(-20px);
  }

  80% {
    -moz-transform: translateX(5px);
  }

  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}

@-o-keyframes bounceInRight {
  0% {
    opacity: 0;
    -o-transform: translateX(2000px);
  }

  60% {
    -o-transform: translateX(-20px);
  }

  80% {
    -o-transform: translateX(5px);
  }

  100% {
    opacity: 1;
    -o-transform: translateX(0);
  }
}

@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }

  60% {
    transform: translateX(-20px);
  }

  80% {
    transform: translateX(5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@-moz-keyframes fadeInUp {
  0% {
    opacity: 0;
    -moz-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}

@-o-keyframes fadeInUp {
  0% {
    opacity: 0;
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@-webkit-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
  }
  50% {
    -webkit-transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(0.9);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
  }
}

@-moz-keyframes bounceIn {
  0% {
    opacity: 0;
    -moz-transform: scale(0.3);
  }

  50% {
    -moz-transform: scale(1.05);
  }

  70% {
    -moz-transform: scale(0.9);
  }

  100% {
    opacity: 1;
    -moz-transform: scale(1);
  }
}

@-o-keyframes bounceIn {
  0% {
    opacity: 0;
    -o-transform: scale(0.3);
  }

  50% {
    -o-transform: scale(1.05);
  }

  70% {
    -o-transform: scale(0.9);
  }

  100% {
    opacity: 1;
    -o-transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  50% {
    transform: scale(1.05);
  }

  70% {
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@-webkit-keyframes moveUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@-moz-keyframes moveUp {
  0% {
    opacity: 1;
    -moz-transform: translateY(40px);
  }

  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}

@-o-keyframes moveUp {
  0% {
    opacity: 1;
    -o-transform: translateY(40px);
  }

  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}

@keyframes moveUp {
  0% {
    opacity: 1;
    transform: translateY(40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes fadeBgColor {
  0% {
    background: none;
  }
  70% {
    background: none;
  }
  100% {
    background: #464646;
  }
}
@-o-keyframes fadeBgColor {
  0% {
    background: none;
  }
  70% {
    background: none;
  }
  100% {
    background: #464646;
  }
}
@keyframes fadeBgColor {
  0% {
    background: none;
  }
  70% {
    background: none;
  }
  100% {
    background: #464646;
  }
}

.animated.animationDelay {
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
.animated.animationDelayMed {
  animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
}
.animated.animationDelayLong {
  animation-delay: 1.6s;
  -webkit-animation-delay: 1.6s;
}
.animated.fadeBgColor {
  -webkit-animation-name: fadeBgColor;
  -moz-animation-name: fadeBgColor;
  -o-animation-name: fadeBgColor;
  animation-name: fadeBgColor;
}
.animated.bounceIn {
  -webkit-animation-name: bounceIn;
  -moz-animation-name: bounceIn;
  -o-animation-name: bounceIn;
  animation-name: bounceIn;
}
.animated.bounceInRight {
  -webkit-animation-name: bounceInRight;
  -moz-animation-name: bounceInRight;
  -o-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
.animated.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  -moz-animation-name: bounceInLeft;
  -o-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
.animated.fadeIn {
  -webkit-animation-name: fadeIn;
  -moz-animation-name: fadeIn;
  -o-animation-name: fadeIn;
  animation-name: fadeIn;
}
.animated.fadeInDown {
  -webkit-animation-name: fadeInDown;
  -moz-animation-name: fadeInDown;
  -o-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
.animated.fadeInUp {
  -webkit-animation-name: fadeInUp;
  -moz-animation-name: fadeInUp;
  -o-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.animated.moveUp {
  -webkit-animation-name: moveUp;
  -moz-animation-name: moveUp;
  -o-animation-name: moveUp;
  animation-name: moveUp;
}

/* Customize Bootstrap */
.carousel-item {
  transition: transform .8s;
  transition-timing-function: cubic-bezier(0.140, 0.010, 0.000, 0.930);
}

.mobileAnim .carousel-item {
  transition-duration: 0.56s;
}

/* My Grid */
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

.hidden-all {
  display: none;
}

/* Media Queries */
/* xl */
@media screen and (min-width: 1777px) {
  .hidden-from-xl {
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
  .hidden-to-lg {
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
  .hidden-to-md {
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
  .visible-to-sm {
    display: block !important;
  }

  .hidden-to-sm {
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
  .visible-to-xs {
    display: block !important;
  }

  .hidden-to-xs {
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
  .visible-to-xs {
    display: none;
  }

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
  .visible-from-sm {
    display: block;
  }
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
