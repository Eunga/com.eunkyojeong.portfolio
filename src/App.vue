<template>
  <div id="app">
    <app-header/>

    <router-view/>

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
  }
};
</script>

<style>

html,
body {
  height: 100%;
  /*overflow:hidden;*/
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
</style>
