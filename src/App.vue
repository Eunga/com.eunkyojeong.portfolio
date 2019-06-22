<template>
  <div id="app">
    
    <!-- Header -->
    <app-header/>

    <!-- Routher View -->
    <transition
      :name="shouldTransition ? 'fade' : ''"
      mode="out-in">

      <router-view :key="$route.name"></router-view>
    </transition>

    <!-- Footer -->
    <app-footer/>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import store from './store'

// Transition을 적용하지 않을 $router.name 
const exceptTransitionList = ['about'];
export default {
  store,
  name: "App",
  components: {
    'app-header': Header, 
    'app-footer': Footer
  },
  data: function() {
    return {
      shouldTransition: true
    }
  },
  watch: {
    $route (to, from) {
      if (to.name != 'portfolio detail') {
        var windowHeight = window.innerHeight;
        var metaHeight = windowHeight - 120;
        $('#portfolio-meta').css({height: metaHeight});
      }

      if (exceptTransitionList.includes(to.name)) {
        this.shouldTransition = false;
      } else {
        this.shouldTransition = true;
      }
    }
  },
};
</script>

<style>
html {
  /* scroll-behavior: smooth; */
}

html,
body {
  font-family: 'Questrial';
  height: 100%;
}

#app {
  transition: all .3s ease-in;
  height:100%;
}


#content {
  height: 80%;
  padding: 0px !important;
  margin-left: 120px;
  margin-right: 120px;
}

.container {
  height: 100%;
}

ul {
  padding: 0px;
  margin: 0;
}

/*************
    Media
*************/

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1530px) {
  .container {
    max-width: 1290px;
  }
}

/* Transistion */
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
}


/* Override Bootstrap */
.row>[class*="col"] {
  /* padding-right:0;
  padding-left:0; */
}

/* .row>.grid:first-child {
  padding-left:0;
  margin-left: 0;
}

.row>.grid:last-child {
  padding-right:0;
  margin-right: 0;
} */


.container {
  padding: 0;
  /* margin: 0 auto; */
}
</style>
