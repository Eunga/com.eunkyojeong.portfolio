<template>
  <div id="about" class="v-container-fluid">
    <app-mask />
    <!-- 
    <div id="aboutProfileImage">
      <img src="../assets/img/about/img-profile.png">
    </div>
    -->

    <div class="row">
      <div id="aboutNameAndResume" class="col-xs-12 col-md-6">
        <div id="aboutName">Eunkyo Jeong</div>
        <div id="aboutResumeBtn">
          <a :href="resume" download target="_blank">
            <span>RESUME</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16.193" height="16" viewBox="0 0 16.193 16">
              <g transform="translate(0 0)">
                  <rect class="a" width="16" height="16" />
                  <path class="b" d="M647.514,754.523v3.262h14.677v-3.262" transform="translate(-646.698 -744.272)" />
                  <path class="b" d="M496.908-871.2v7.339" transform="translate(-488.754 872.834)" />
                  <path class="b" d="M498.5-865.32l2.854,2.854,2.854-2.854" transform="translate(-493.2 871.815)" />
              </g>
            </svg>
          </a>
        </div>
      </div>

      <div class="col-xs-12 col-md-6 animatable fadeInUp">
        <div id="introduceHerSelf" v-html="introduce"></div>

        <!-- 
        <div id="aboutContact">
          <a href="tel:+821020077774" v-html="phoneNumber"></a>
        </div>
        -->
        <!--  
        <div id="aboutContact" v-html="email"></div>
        -->

        <div id="aboutContact">
          <span class="aboutContactSns" v-for="(s, idx ) in sns" v-bind:key="s.id">
            <a :href="s.url" :target="s.target" v-html="s.name"></a>

            <span class="aboutContactSnsDelimiter" v-if="idx < sns.length - 1 "></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mask from "./Mask";

export default {
  name: "About",
  components: {
    "app-mask": Mask
  },
  data: function() {
    return {
      about: this.$store.getters.about,
      sns: this.$store.getters.snsForAboutPage,
      resume: this.$store.getters.about.resume
    };
  },
  mounted() {
    $(".portfolio-item-detail-temp").hide();

    window.scrollTo(0, 0);
    $(document).ready(function($) {
      // Function which adds the 'animated' class to any '.animatable' in view
      const doAnimations = function() {
        // Calc current offset and get all animatables
        const offset = $(window).scrollTop() + $(window).height(),
          $animatables = $(".animatable");

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
          $(window).off("scroll", doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
          const $animatable = $(this);
          if ($animatable.offset().top + 150 < offset) {
            $animatable.removeClass("animatable").addClass("animated");
          }
        });
      };

      // Hook doAnimations on scroll, and trigger a scroll
      $(window).on("scroll", doAnimations);
      $(window).trigger("scroll");
    });
  },
  computed: {
    introduce() {
      return this.about.introduce.replace(/\n/g, "<br/>");
    },
    email() {
      return this.about.email;
    },
    phoneNumber() {
      return this.about.phoneNumber;
    }
  }
};
</script>

<style>
#about {
  padding-top: 240px;
  position: relative;
  height: calc(100vh - 240px);
}

#aboutProfileImage {
  padding-top: 131px;
}

.about-contact-sns {
  margin-right: 10px;
}

#aboutName {
  font-family: Questrial;
  font-size: 70px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -1.4px;
  text-align: left;
  color: #000000;
  left: -4px;
  position: relative;
  line-height: 74px;
}

#about #margin {
  display: none;
}

#aboutResumeBtn {
  margin-top: 30px;
  width: 163px;
  height: 43px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: all .3s ease-in-out;
}

#aboutResumeBtn a {
  width: 100%;
  height: 100%;
  padding: 10px 18px;
  text-decoration: none;
  color: white;
  text-align: left;
}

#aboutResumeBtn:hover {
  opacity: 0.7;
}

#aboutResumeBtn span {
  font-family: Questrial;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 4px;
}

#aboutResumeBtn img {
  float: right;
  top: 3px;
  position: relative;
}

#aboutResumeBtn svg {
  top: 3px;
  position: relative;
  float: right;
}

#aboutResumeBtn svg .a {
  fill:rgba(255,0,0,0);
}

#aboutResumeBtn svg .b {
  fill:none;
  stroke:#fff;
  stroke-width:1.4px;
}

#introduceHerSelf {
  font-family: HelveticaNeue;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.7;
  letter-spacing: -0.2px;
  text-align: left;
  color: #000000;
}

#aboutContact {
  margin-top: 30px;
}
#aboutContact a {
  font-family: HelveticaNeue;
  font-size: 20px;
  color: black;
  opacity: 0.3;
  transition: opacity 0.4s ease-out;
  text-decoration: none;
}

.aboutContactSnsDelimiter {
  width: 14px;
  height: 14px;
  margin-right: 14px;
  border-right: 1px solid #bbbbbb;
  display: inline-block;
}

#aboutContact a:hover {
  opacity: 1;
}

#aboutNameAndResume {
  margin-bottom: 40px;
}

@media screen and (max-width: 767px) {
  #about {
    padding-top: 120px;
  }

  #aboutNameAndResume {
    margin-bottom: 20px;
  }

  #aboutName {
    font-size: 50px;
  }

  #aboutResumeBtn {
    margin-top: 15px;
    width: 180px;
  }

  #aboutResumeBtn span {
    font-size: 18px;
  }

  #introduceHerSelf {
    font-size: 16px;
  }
}

@media screen and (max-width: 1023px) {
  #about {
    height: calc(100vh - 48px);
  }
}


@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #about {
    height: calc(100vh - 80px);
  }
}

@media screen and (min-width: 1440px) {
  #about {
    height: calc(100vh - 120px);
  }
}
</style>
