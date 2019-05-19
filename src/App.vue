<template>
  <div id="app">
    <app-header/>

    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>

    <app-footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: "App",
  components: {
    'app-header': Header, 
    'app-footer': Footer
  },
  watch:{
    $route (to, from) {
      if (to.name == 'portfolio detail') {
        $('#header').addClass('hide');
      } else {
        $('#header').removeClass('hide');
      }
    }
  },
  mounted() {
    var routeName = this.$route.name;
    if (routeName == 'portfolio detail') {
      $('#header').hide();
    } else {
      $('#header').show();
    }
  },

};
</script>

<style>

html,
body {
  height: 100%;
  font-family: 'Questrial'
  /*overflow:hidden;*/
}

#app {
  height: 100%;
  position: relative;
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
  transition-duration: 1s;
}

</style>
