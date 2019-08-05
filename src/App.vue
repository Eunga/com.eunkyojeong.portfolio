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
  transition: all 0.3s ease-in;
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

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .v-container-fluid {
    max-width: 1159px;
    margin-left: 60px;
    margin-right: 60px;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
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
</style>
