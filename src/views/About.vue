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
            <img src="../assets/img/about/ico-download.png" alt="resume download"/>
          </a>
        </div>
      </div>

      <div class="col-xs-12 col-md-6">
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
          <span class="aboutContactSns" 
            v-for="(s, idx ) in sns" 
            v-bind:key="s.id">

            <a :href="s.url" :target="s.target" v-html="s.name"></a>

            <span class="aboutContactSnsDelimiter" v-if="idx < sns.length - 1 "></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mask from './Mask'

export default {
  name: "About",
  components: {
  	'app-mask': Mask
  },
  data: function() {
    return {
      about: this.$store.getters.about,
      sns: this.$store.getters.snsForAboutPage,
      resume: this.$store.getters.about.resume
    }
  },
  computed: {
    introduce() {
      return this.about.introduce.replace(/\n/g, '<br/>');
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
  padding-top: 120px;
  margin-top: 120px;
  position: relative;
  height: calc(100vh - 120px);
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
}

#aboutResumeBtn a {
  width: 100%;
  height: 100%;
  padding: 10px 18px;
  text-decoration: none;
  color: white;
  text-align: left;
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
  margin-top:30px;
}
#aboutContact a {
  font-family: HelveticaNeue;
  font-size: 20px;
  color: #bbbbbb;
  transition: opacity .4s ease-out;
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
  color: black;
}

#aboutNameAndResume {
  margin-bottom: 40px;
}

@media (max-width: 767px) {
  #about {
    margin-top: 60px;
    padding-top: 60px;
  }
  
  #aboutNameAndResume {
    margin-bottom: 20px
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
</style>
