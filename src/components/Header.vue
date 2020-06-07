<template>
  <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class="[theme]">
    <router-link 
      onclick="gtag('event', 'Home', {'event_category': 'Page', 'event_label': 'Header Navigation Button Click.'})"
      class="navbar-brand" 
      to="/" 
      style="z-index:10">EUNKYO JEONG</router-link>
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
    <div>
      <span class="navLink" id="portfolio-header">
        <router-link
          onclick="gtag('event', 'Home', {'event_category': 'Page', 'event_label': 'Header Navigation Button Click.'})"
          id="navPortfolio"
          to="/"
          class="nav-link"
          :class="{'router-link-exact-active': isActivePortfolio()}">
          Portfolio 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12">
              <rect class="a" width="20" height="12"/>
              <path class="b" d="M-1135.7-362.133l8,8,8-8" transform="translate(1137.705 364.133)"/>
            </svg>
          </span>
        </router-link>

        <div id="portfolio-project-list">
          <div>
            <div class="arrow-up"></div>
            <ul v-if="works.length" class="portfolio-carousel carousel-inner">
              <li v-for="work in works"
                :class="{'active': isActivePortfolioDetailWork(work)}">
                <router-link
                  onclick="gtag('event', 'Header', {'event_category': 'Page', 'event_label': 'Header Navigation Button Click.'})"
                  :to="retreiveWorkDetailPath(work)">
                
                  <span class="portfolio-project-number">{{ makeTwoDigitFromWorkId(work) }}</span>
                  <span class="portfolio-project-title">{{ extractCapTitleFromTitle(work) }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

      </span>
      <span class="navLink">
        <router-link 
          onclick="gtag('event', 'About', {'event_category': 'Page', 'event_label': 'Header Navigation Button Click.'})"
          id="navAbout" 
          to="/about" 
          class="nav-link">About</router-link>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    retreiveWorkDetailPath(work) {
      const relativePath = work.path;
      if (this.isActivePortfolioDetailPage()) {
        return relativePath;
      }

      return `/portfolio/${relativePath}`
    },
    isActivePortfolio() {
      const name = this.$route.name;
      if (name == "about") {
        return false;
      }
      return true;
    },
    isActivePortfolioDetailWork(work) {
      const route = this.$route;
      const name = this.$route.name;
      if (name != "portfolio-detail") {
        return false;
      }

      const workPath = work.path;
      const path = this.$route.params.path;

      if (workPath != path) {
        return false;
      }

      return true;
    },
    isActivePortfolioDetailPage() {
      const name = this.$route.name;
      if (name != "portfolio-detail") {
        return false;
      }

      return true;
    },
    extractCapTitleFromTitle(work) {
      // TODO: if unlocked -> unlocked title. or not, locking title.
      if (work.isLockedProject && work.isUnlocked) {
        return work.unlockedInfo.title.substring(0, work.unlockedInfo.title.indexOf("\n"));
      }

      return work.title.substring(0, work.title.indexOf("\n"));
    },
    makeTwoDigitFromWorkId(work) {
      if (work.id < 10) {
        return `0${work.id + 1}`
      } else {
        return `${work.id + 1}`
      }
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
  computed: {
    works() {
      return this.$store.getters.works;
    }
  },
  mounted() {
    if (this.$route.name == "portfolio-detail") {
      const work = this.$store.getters.workFromPath(this.$route.path);
      this.theme = work.theme;
    } else {
      this.theme = "black";
    }

    $('#portfolio-header').mouseover(function() {

    });
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
  z-index: 510;
  background-color: transparent !important;
}

#navAbout {
  padding-right: 0;
}

.navLink {
  z-index: 1;
  display: inline-block;
  position: relative;
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
    opacity: 1;
  }

  .navbar-brand {
    font-size: 11px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #header {
    height: 80px;
    padding: 0px 60px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
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

nav.white a.navbar-brand {
  text-shadow: 0px 0px 30px rgba(0,0,0,.3);
}

nav.white .navLink>a {
  text-shadow: 0px 0px 30px rgba(0,0,0,.3);
}

#portfolio-header:hover #portfolio-project-list {
  display: block;
}

#portfolio-project-list {
  display: none;
  position: absolute;
  left: -70px;
}

#portfolio-project-list>div {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: relative;
  background-color: black;
  width: 255px;
  height: 240px;
}

#portfolio-project-list ul {
  list-style: none;
  height: auto;
}

#portfolio-project-list li {
  transition: opacity .3s ease-in-out;
  cursor: pointer;
  margin-bottom: 1px;
  opacity: 1;
}

#portfolio-project-list li a {
  text-decoration: none;
}

#portfolio-project-list li:hover {
  opacity: .6;
}

#portfolio-project-list li.active {
  opacity: .3;
}

#portfolio-project-list span {
  color: white;
  font-family: Questrial;
  letter-spacing: -0.4px;
  opacity: 1;
}

.portfolio-project-number {
  padding-right: 20px;
  font-size: 14px;
}

.portfolio-project-title {
  font-size: 20px;
}

.arrow-up {
  position: absolute;
  top: -7px;
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid black;
}

#navPortfolio .a{fill:rgba(255,0,0,0);}
#navPortfolio .b{fill:none;stroke:#000;stroke-width:1.4px;}
</style>

