<template>
    <div id="margin">
        <div id="margin-left" class="margin-vertical"></div>
        <div id="margin-right" class="margin-vertical"></div>

        <div id="margin-bottom" class="margin-horizontal"></div>
    </div>
</template>

<script>
export default {
    name: 'margin',
    watch: {
        $route (to, from) {
            if (to.name == 'home') {
                $('#margin').addClass('home');
                $('#margin').removeClass('detail');
            } else if (to.name == 'portfolio detail') {
                $('#margin').addClass('detail');
                $('#margin').removeClass('home');
            }
        }
    },
    mounted() {
	  const path = this.$route.name;
	  if (path == 'home') {
		$('#margin').addClass('home');
        $('#margin').removeClass('detail');
	  } else if (path == 'portfolio detail') {
		$('#margin').addClass('detail');
        $('#margin').removeClass('home');
	  }
  }
}
</script>

<style>
#margin {
    position: absolute;
    width: 100%;
    width:100vw;
    height: 100%;
    height:100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.margin-vertical {
  height: 100%;
  width:120px;
  position: absolute;
  /* box-shadow: 5px 5px red inset; */
  z-index: 500;
  transition: all 0.3 ease-in;
}

.margin-horizontal {
  height: 120px;
  width: 100%;
  position: absolute;
  /* box-shadow: 5px 5px red inset; */
  z-index: 500;
}

/* LEFT */
#margin-left {
  left:0;    
}

#margin-left::after {
  content: '';
  width: 120px;
  height: 100%;
  float:left;
  position: relative;
  background-color: white;
  display: block;
}

#margin.detail #margin-left::after {
  left: -300px;
}

/* RIGHT */
#margin-right {
  right:0;    
}

#margin-right::after {
  content: '';
  width: 120px;
  float:right;
  height: 100%;
  position: relative;
  background-color: white;
  display: block;
}

#margin.detail #margin-right::after {
  right: -300px;
}

/* BOTTOM */
#margin-bottom {
  bottom: 0;    
}

#margin-bottom::after {
  content: '';
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
  bottom: -300px;
}



/* Aniamations */
.fade-leave-active #margin.home #margin-left {
  transform: translateX(-300px);
  transition-duration: .3s;
}

.fade-leave-active #margin.home #margin-right {
  transform: translateX(300px);
  transition-duration: .3s;
}

.fade-leave-active #margin.detail #margin-left {
  transform: translateX(300px);
  transition-duration: .3s;
}

.fade-leave-active #margin.detail #margin-right {
  transform: translateX(-300px);
  transition-duration: .3s;
}

.fade-leave-active #margin.home #margin-bottom {
  transform: translateY(300px);
  transition-duration: .3s;
}

.fade-leave-active #margin.detail #margin-bottom {
  transform: translateY(-300px);
  transition-duration: .3s;
}

/* Media Queries */
@media screen and (max-width:767px) {
  .margin-vertical {
    width: 30px;
  }

  .v-container-fluid {
    max-width: 707px;
  }

  #margin-left::after, #margin-right::after {
    display: none;
  }

  #margin-bottom {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .margin-vertical {
    width: 60px;
  }

  .v-container-fluid {
    max-width: 1159px;
    margin-left: 60px;
    margin-right: 60px;
  }

  #margin-left::after, #margin-right::after {
    display: none;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .margin-vertical {
    width: 160px;
  }

  .v-container-fluid {
    max-width: 1119px;
    margin-left: 160px;
    margin-right: 160px;
  }

  #margin-left::after, #margin-right::after {
    width: 80px;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  .margin-vertical {
    /* width: 240px; */
    width: 120px;
  }

  .v-container-fluid {
    /* max-width: 1119px; */
    margin-left: 240px;
    margin-right: 240px;
  }

  #margin-left::after, #margin-right::after {
    width: 120px;
  }
}

@media screen and (min-width: 1777px) {
  .margin-vertical {
    width: initial;
  }

  .v-container-fluid {
    width: 1296px;
    margin: auto;
  }

  #margin-left::after, #margin-right::after {
    width: 120px;
  }
}

</style>
