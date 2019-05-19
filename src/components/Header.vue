<template>
    <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">EUNKYO JEONG</router-link>
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
  background-color: #ffffff !important;


  position: absolute;
  top:0;
  left:0;
  right:0;
  left:0;
  z-index:500;
}

#header {
  transition: all .3s ease-out;
}
#header.hide {
  opacity: 0;
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

