<template>
  <div id="about" class="v-container-fluid">
    <!-- Desktop -->
    <div id="aboutOffset"></div>

    <div id="aboutDesktop" class="hidden-to-sm row tab">

      <!-- For eunkyo's request, the background section will be hidden. -->
      <div class="tabtitle col-6" style="display: none;" >
        <ul>
          <li class="tabtitle-item active" data-tabcontent-idx="0">
            <div class="tabtitle-item-title">Introduction</div>
            <div class="tabtitle-divider"></div>
          </li>

          <li class="tabtitle-item" data-tabcontent-idx="1">
            <div class="tabtitle-item-title">Background</div>
            <div class="tabtitle-divider"></div>
          </li>
        </ul>

      </div>

      <div class="tabcontent offset-sm-6 col-6">
        
        <!-- Introduction -->
        <div class="aboutIntroductionContent tabcontent-item active">
          <div class="aboutName animatable fadeInUp">
            <span>Hi, I'm Kyo!</span>
          </div>

          <div 
            class="introduceHerSelf animatable fadeInUp" 
            v-html="introduce">
          </div>

          <div class="aboutResumeBtn animatable fadeInUp">
            <a
              onclick="gtag('event', 'About', {'event_category': 'Click', 'event_label': 'Resume Download Button Click.'})"
              :href="resume" 
              download 
              target="_blank">
              <span>RESUME</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g id="ico-download">
                    <path id="area" d="M0 0h16v16H0z" class="cls-1"/>
                    <path id="Path_10" d="M647.514 754.523v3.262h14.677v-3.262" class="cls-2" data-name="Path 10" transform="translate(-646.698 -744.272)"/>
                    <path id="Path_8" d="M496.908-871.2v7.339" class="cls-2" data-name="Path 8" transform="translate(-488.754 872.834)"/>
                    <path id="Path_9" d="M498.5-865.32l2.854 2.854 2.854-2.854" class="cls-2" data-name="Path 9" transform="translate(-493.2 871.815)"/>
                </g>
              </svg>
            </a>
          </div>

          <div class="animatable fadeInUp">
            <div class="aboutAdobeCreateType">
              <a 
                onclick="gtag('event', 'About', {'event_category': 'Click', 'event_label': 'MyCreativeType Button Click.'})"
                :href="myCreativeType" 
                target="_blank">
                Adobe says this is #MyCreativeType
              </a>
            </div>

            <div class="aboutPersonalType">
              <a 
                onclick="gtag('event', 'About', {'event_category': 'Click', 'event_label': 'Personality Button Click.'})"
                :href="myPersonality" 
                target="_blank">
                Here, more of my personality
              </a>
            </div>
          </div>
        </div>
        

        <!-- Background -->
        <div class="aboutBackgroundContent tabcontent-item animatable fadeInUp">
          I have over six years of experience in the industry.<br/>
          I majored in Visual Communication Design at Hongik University, South Korea’s top art university.
          <br/><br/>
          Prior to graduation I had the opportunity to work as an intern at LG Electronics, where I worked on smart home technology. I had so much fun thinking about users and their needs, which sparked my passion for UX design. 
          <br/><br/>
          After graduating, I worked at a startup, at which I launched an app called Offin. I was solely responsible for the design of the app. As a new designer, I decided to move to a larger, more established company to expand my skillset. 
          <br/><br/>
          At my most recent job, Kakao’s Daum Webtoon Company, my main job was redesigning the mobile app. I gained insight into how a visually pleasing interface creates a smoother user experience, and also developed an understanding of how to make apps more user-friendly overall. 
          <br/><br/>
          At my next job, I hope to continue developing my UX design skills while bringing in aesthetically pleasing interface designs.
          
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div id="aboutMobile" class="visible-to-sm">
      <!-- Introduction -->
      <div class="aboutIntroductionContent">
        <!-- For eunkyo's request, the background section will be hidden. -->
        <div class="tabtitle-item-title" style="display: none;">Introduction</div>
        <div class="tabtitle-divider" style="display: none;"></div>
        
        <div class="aboutName animatable fadeInUp">
          <span>Hi, I'm Kyo!</span>
        </div>

        <div 
          class="introduceHerSelf animatable fadeInUp" 
          v-html="introduce">
        </div>

        <div class="aboutResumeBtn animatable fadeInUp">
          <a
            onclick="gtag('event', 'About', {'event_category': 'Click', 'event_label': 'Resume Download Button Click.'})"
            :href="resume" 
            download 
            target="_blank">
            <span>RESUME</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <g id="ico-download">
                  <path id="area" d="M0 0h16v16H0z" class="cls-1"/>
                  <path id="Path_10" d="M647.514 754.523v3.262h14.677v-3.262" class="cls-2" data-name="Path 10" transform="translate(-646.698 -744.272)"/>
                  <path id="Path_8" d="M496.908-871.2v7.339" class="cls-2" data-name="Path 8" transform="translate(-488.754 872.834)"/>
                  <path id="Path_9" d="M498.5-865.32l2.854 2.854 2.854-2.854" class="cls-2" data-name="Path 9" transform="translate(-493.2 871.815)"/>
              </g>
            </svg>
          </a>
        </div>

        <div class="animatable fadeInUp">
          <div class="aboutAdobeCreateType">
            <a 
              onclick="gtag('event', 'About', {'event_category': 'Click', 'event_label': 'MyCreativeType Button Click.'})"
              :href="myCreativeType" 
              target="_blank">
              Adobe says this is #MyCreativeType
            </a>
          </div>

          <div class="aboutPersonalType">
            <a 
              onclick="gtag('event', 'About', {'event_category': 'Click', 'event_label': 'Personality Button Click.'})"
              :href="myPersonality" 
              target="_blank">
              Here, more of my personality
            </a>
          </div>
        </div>
      </div>
      

      <!-- Background -->
      <div class="aboutBackgroundContent tabcontent-item animatable fadeInUp">
        <div class="tabtitle-item-title">Background</div>
        <div class="tabtitle-divider"></div>

        <div>
        I have over six years of experience in the industry.<br/>
        I majored in Visual Communication Design at Hongik University, South Korea’s top art university.
        <br/><br/>
        Prior to graduation I had the opportunity to work as an intern at LG Electronics, where I worked on smart home technology. I had so much fun thinking about users and their needs, which sparked my passion for UX design. 
        <br/><br/>
        After graduating, I worked at a startup, at which I launched an app called Offin. I was solely responsible for the design of the app. As a new designer, I decided to move to a larger, more established company to expand my skillset. 
        <br/><br/>
        At my most recent job, Kakao’s Daum Webtoon Company, my main job was redesigning the mobile app. I gained insight into how a visually pleasing interface creates a smoother user experience, and also developed an understanding of how to make apps more user-friendly overall. 
        <br/><br/>
        At my next job, I hope to continue developing my UX design skills while bringing in aesthetically pleasing interface designs.
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
      resume: this.$store.getters.about.resume,
    };
  },
  mounted() {
    $(".portfolio-item-detail-temp").hide();

    $('.tabtitle-item').click(function() {
      const title = $(this).find('.tabtitle-item-title').html();
    
      const idxOfContent = $(this).attr('data-tabcontent-idx');

      const $contentItem = $('#aboutDesktop .tabcontent-item');
      $contentItem.hide();
      $contentItem.eq(idxOfContent).show();

      $('.tabtitle-item').removeClass('active');
      $(this).addClass('active');

      gtag('event', 'About', {'event_category': 'Click', 'event_label': `${title} Click.`});
    });

    $(document).ready(function() {
      const $animatables = $("#about .animatable");

      const timeIntervalInMillis = 100;
      let timeIntervalAccumulator = 0;
      $animatables.each(function(i) {
        const $animatable = $(this);
        const timeCount = i;
        const interval = timeIntervalInMillis * timeCount;
        setTimeout(function() {
          $animatable.removeClass("animatable").addClass("animated");
        }, timeIntervalInMillis * (timeCount));
      });

      const setAboutContentHeight = function() {
        const heightOfHeader = $('#header').height();
        const heightOfFooter = $('#footer').height();
        const heightOfWindow = window.innerHeight;
        const widthOfWindow = window.innerWidth;

        const heightOfContent = heightOfWindow - heightOfHeader - heightOfFooter;

        // Mobile
        if (heightOfHeader < 49) {
          $('#aboutOffset').height(heightOfHeader + 20);
          return;
        } else if (heightOfHeader < 81 && widthOfWindow < 1025) {
          $('#aboutOffset').height(heightOfHeader + 30);
          return;
        }

        let maxHeight = 0;
        $('#aboutDesktop .tabcontent-item').each(function(i, v) {
            const h = $(v).height();

            if (maxHeight < h) {
                maxHeight = h;
            }
        });
        const heightOfAboutContent = maxHeight;

        if (heightOfContent >= heightOfAboutContent) {
          const offset = (heightOfContent - heightOfAboutContent)/2;
          $('#aboutOffset').height(heightOfHeader + offset);;
        } else {
          $('#aboutOffset').height(heightOfHeader);
          $('#aboutDesktop').height(heightOfContent);
        }
      }

      setAboutContentHeight();
      window.addEventListener('resize', function() {
        setAboutContentHeight();
      });

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
    },
    myCreativeType() {
      return this.about.myCreativeType;
    },
    myPersonality() {
      return this.about.myPersonality;
    },
  },
  methods: {
    
  },
};
</script>

<style>
#about {
  position: relative;
  height: calc(100vh - 240px);
  overflow-y: hidden;
}

.tabcontent {
  
}

#aboutOffset {
  position: relative;
  /* height: 120px; */
}

#aboutDesktop {
  overflow-y: auto;
}


#aboutMobile {
  display: none;
}

.tab {
  width: 100%;
}

.tabcontent-item {
  display: none;
}

.tabcontent-item.active {
  display: block;
}

.tabtitle ul {
  list-style: none;
}

.tabtitle-item-title {
  font-family: Questrial;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  /* line-height: 1.6; */
  letter-spacing: -0.2px;
  text-align: left;
  width: 125px;
  display: inline-block;
  margin-bottom: 5px;
  cursor: pointer;
}

.tabtitle-item {
  opacity: 0.3;
  transition: opacity .3s ease-in-out;
  margin-bottom: 10px;
}

.tabtitle-item:hover {
  opacity: 1;
}

.tabtitle-item.active {
  opacity: 1;
}

.tabtitle-divider {
  width: 0px;
  border-bottom: 1px solid black;
  display: inline-block;
  top: -6px;
  position: relative;
  opacity: 1;
  transition: width 0.3s ease-in-out;
}

.tabtitle-item.active .tabtitle-divider {
  width: 100px;
}


.tabtitle-item span {
  cursor: pointer;
}

.aboutBackgroundContent {
  /* For eunkyo's request, the background section will be hidden. */
  display: none !important;
  font-family: HelveticaNeue;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  /* line-height: 1.79; */
  letter-spacing: -0.38px;
  text-align: left;
}

.aboutName {
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
  line-height: 1;
  margin-bottom: 60px;
}

.introduceHerSelf {
  font-family: HelveticaNeue;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  /* line-height: 1.68; */
  letter-spacing: -0.38px;
  text-align: left;
}

.aboutResumeBtn {
  margin-top: 60px;
  width: 163px;
  height: 43px;
  background-color: white;
  border: 1px solid black;
  color: black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition-property: opacity, background-color;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.aboutResumeBtn a {
  width: 100%;
  height: 100%;
  padding: 10px 18px;
  text-decoration: none;
  color: black;
  text-align: left;
  transition-property: opacity, background-color, color;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.aboutResumeBtn:hover {
  background-color: black;
}

.aboutResumeBtn:hover a {
  color: white;
}

.aboutResumeBtn span {
  font-family: Questrial;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 4px;
}

.aboutResumeBtn img {
  float: right;
  top: 3px;
  position: relative;
}

.aboutResumeBtn svg {
  top: 3px;
  position: relative;
  float: right;
}

.aboutResumeBtn svg .cls-1 {
  fill:rgba(255,0,0,0)
}

.aboutResumeBtn svg .cls-2 {
  fill:none;
  stroke:#000;
  transition-property: stroke;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.aboutResumeBtn:hover svg .cls-2{
  stroke:#fff
}

.aboutAdobeCreateType a, .aboutPersonalType a {
  font-family: Questrial;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  /* line-height: 1.6; */
  letter-spacing: -0.2px;
  text-align: left;
  opacity: 0.3;
  color: black;
  text-decoration: none;
  transition: opacity .3s ease-in-out;
}

.aboutAdobeCreateType:hover a , .aboutPersonalType:hover a {
  opacity: 1.0;
}

.aboutAdobeCreateType {
  margin-top: 60px;
}

@media screen and (max-width: 767px) {
  #about {
    overflow: unset;
  }

  .visible-to-xs {
    margin-bottom: 90px;
  }

  .tabtitle-item-title {
    font-family: Questrial;
    font-size: 14px;
    letter-spacing: -0.14px;
    text-align: left;
    width: 84px;
  }
  .tabtitle-divider {
    width: 50px;
  }

  .tabcontent-item {
    display: block;
  }

  .aboutName {
    font-family: Questrial;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    /* line-height: 2.06; */
    letter-spacing: -0.72px;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .introduceHerSelf {
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: -0.28px;
    text-align: left;
  }
  
  .aboutResumeBtn {
    margin-top: 30px;
  }

  .aboutAdobeCreateType {
    margin-top: 30px;
  }

  .aboutPersonalType {
    margin-bottom: 60px;
  }

  .aboutAdobeCreateType a, .aboutPersonalType a {
    font-family: Questrial;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.14px;
    text-align: left;
  }

  .aboutBackgroundContent .tabtitle-item-title {
    margin-bottom: 20px;
  }

  .aboutBackgroundContent {
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: -0.28px;
    text-align: left;
  }
}

#aboutMobile .aboutBackgroundContent {
  margin-bottom: 60px;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .aboutName {
    margin-bottom: 15px;
  }

  .aboutResumeBtn {
    margin-top:30px;
  }

  .aboutAdobeCreateType {
    margin-top:30px;
  }

  .aboutPersonalType {
    margin-bottom: 60px;
  }
  
  .tabtitle-divider {
      width: 80px;
  }
}

@media screen and (max-width: 1023px) {
  #about {
    height: unset;
    height: initial;
  }

  .tabcontent-item {
    display: block;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #about {
    /* footer is 80px; */
    height: calc(100vh - 80px);
  }
}

@media screen and (min-width: 1440px) {
  #about {
    /* footer is 120px; */
    height: calc(100vh - 120px);
  }
}

</style>
