<template>
  <div id="margin">
    <div id="margin-left" class="margin-vertical"></div>
    <div id="margin-right" class="margin-vertical"></div>

    <div id="margin-top" class="margin-horizontal"></div>
    <div id="margin-bottom" class="margin-horizontal"></div>
  </div>
</template>

<script>
;

export default {
  name: "margin",
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      if (to.name == "home" || to.name == "portfolio") {
        $("#margin").addClass("home");
        $("#margin").removeClass("detail");
      } else if (to.name == "portfolio-detail") {
        $("#margin").addClass("detail");
        $("#margin").removeClass("home");
      }
    }
  },
  mounted() {
    const path = this.$route.name;
    if (path == "home" || path == "portfolio") {
      $("#margin").addClass("home");
      $("#margin").removeClass("detail");
    } else if (path == "portfolio-detail") {
      $("#margin").addClass("detail");
      $("#margin").removeClass("home");
    }
  }
};
</script>

<style>
#margin {
  position: absolute;
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.margin-vertical {
  height: 100%;
  position: fixed;
  position: absolute;
  z-index: 500;
  transition: all 0.3s ease-in-out;
}

.margin-horizontal {
  width: 100%;
  position: fixed;
  position: absolute;
  z-index: 100;
  transition: all 0.3s ease-in-out;
}

/* LEFT */
#margin-left {
  left: 0;
}

#margin-left::after {
  content: "";
  width: 120px;
  height: 100%;
  background-color: white;
  display: block;
}

#margin.detail #margin-left {
  left: -120px;
}

/* RIGHT */
#margin-right {
  right: 0;
}

#margin-right::after {
  content: "";
  width: 120px;
  height: 100%;
  background-color: white;
  display: block;
}

#margin.detail #margin-right {
  right: -120px;
}

/* BOTTOM */
#margin-bottom {
  bottom: 0;
}

#margin-bottom::after {
  content: "";
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  display: block;
}

#margin.home #margin-bottom::after {
  display: none;
}

#margin.detail #margin-bottom::after {
  bottom: -120px;
}

/* TOP */
#margin-top {
  top: 0;
}

#margin-top::after {
  content: "";
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  display: block;
}

#margin.detail #margin-top::after {
  top: -120px;
}

#portfolio #margin-bottom {
  display: none;
}

/* Media Queries */
@media screen and (max-width: 767px) {
  .margin-vertical {
    width: 30px;
  }

  .margin-horizontal {
    height: 48px;
  }

  #margin-left::after,
  #margin-right::after {
    display: none;
  }

  #margin-bottom {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .margin-horizontal {
    height: 80px;
  }

  #margin-left::after,
  #margin-right::after {
    display: none;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #margin-left::after {
    left: -30px;
  }

  #margin-right::after {
    right: -30px;
  }
  #margin-left::after,
  #margin-right::after {
    position: relative;
    width: 110px;
  }

  .margin-horizontal {
    height: 80px;
  }
}

@media screen and (min-width: 1440px) {
  #margin-left::after {
    left: -30px;
  }

  #margin-right::after {
    right: -30px;
  }
  #margin-left::after,
  #margin-right::after {
    position: relative;
    width: 150px;
  }

  .margin-horizontal {
    height: 120px;
  }
}
</style>
