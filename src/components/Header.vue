<template>
  <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class="[theme]">
    <router-link class="navbar-brand" to="/" style="z-index:10">EUNKYO JEONG</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav"></div>
    <span class="navLink">
      <router-link
        id="navPortfolio"
        to="/"
        class="nav-link"
        :class="{'router-link-exact-active': isActivePortfolio()}"
      >Portfolio</router-link>
    </span>
    <span class="navLink">
      <router-link id="navAbout" to="/about" class="nav-link">About</router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    isActivePortfolio() {
      const name = this.$route.name;
      if (name == "about") {
        return false;
      }
      return true;
    }
  },
  data: function() {
    return {
      theme: "black"
    };
  },
  watch: {
    $route(to, from) {
      if (to.name == "portfolio-detail") {
        const work = this.$store.getters.workFromPath(to.path);
        this.theme = work.theme;
      } else {
        this.theme = "black";
      }
    }
  },
  mounted() {
    if (this.$route.name == "portfolio-detail") {
      const work = this.$store.getters.workFromPath(this.$route.path);
      this.theme = work.theme;
    } else {
      this.theme = "black";
    }
  }
};
</script>

<style scoped>
.nav-link.active-highlight {
  opacity: 1;
}

#header {
  padding: 0px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  z-index: 500;
  background-color: transparent !important;
}

#navAbout {
  padding-right: 0;
}

.navLink {
  z-index: 1;
}

.navbar-toggler {
  visibility: hidden;
}

.nav-link {
  font-family: Questrial;
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: -0.4px;
  text-align: left;
  opacity: 0.3;
  color: black;
  transition: opacity 0.4s ease-out;
}

#header.white .navbar-brand,
#header.black .nav-link {
  color: black;
}

#header.white .navbar-brand,
#header.white .nav-link {
  color: white;
}

.nav-link:hover {
  opacity: 1;
}

.nav-link.router-link-exact-active {
  opacity: 1;
}

.navbar-brand {
  font-family: Questrial;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.06;
  letter-spacing: 3.4px;
  text-align: left;
}

/* Media Queries */
@media screen and (max-width: 767px) {
  #header {
    height: 48px;
    padding: 0px 30px;
  }

  #navPortfolio {
    display: none;
  }

  .nav-link {
    font-size: 13px;
  }

  .navbar-brand {
    font-size: 11px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  #header {
    height: 80px;
    padding: 0px 60px;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  #header {
    height: 80px;
    padding: 0px 80px;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  #header {
    height: 120px;
    padding: 0px 120px;
  }
}

@media screen and (min-width: 1777px) {
  #header {
    height: 120px;
    padding: 0px 120px;
  }
}
</style>

