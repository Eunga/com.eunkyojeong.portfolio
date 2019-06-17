<template>
    <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light">
      <div id="header-mask"></div>
      <router-link class="navbar-brand" to="/" style="z-index:10">EUNKYO JEONG</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav"></div>
      <span class="navLink">
        <router-link to="/" class="nav-link">Portfolio</router-link>
      </span>
      <span class="navLink">
        <router-link to="/about" class="nav-link">About</router-link>
      </span>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
#header {
  padding: 0px 120px !important;
  height: 120px;
  position: absolute;
  top:0;
  left:0;
  right:0;
  left:0;
  z-index:500;
  transition: all .3s ease-out;
  background-color: transparent !important;;
}

#header-mask {
  position: absolute;
  background-color: #ffffff !important;
  width:100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: all .3s ease-out;
}


#header.hide #header-mask {
  transform: translateY(-300px);
}

.navbar-toggler {
  visibility: hidden;
}

.navLink a {
  font-family: Questrial;
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: -0.4px;
  text-align: left;
  opacity:0.3;
  color: black;
}

.navLink a.router-link-exact-active {
  opacity:1;
}

</style>

