<template>
  <div id="about" class="container">
    <div id="aboutProfileImage">
      <img src="../assets/img/about/img-profile.png">
    </div>

    <div class="row">
      <div class="col-3">
        <div class="aboutName">Eunkyo Jeong</div>
        <div class="aboputResume">RESUME</div>
      </div>

      <div class="col-9">
        <div class="introduceHerSelf" v-html="introduce"></div>

        <div class="aboutContact">
          <a href="tel:+821020077774" v-html="phoneNumber"></a>
        </div>

        <div class="aboutContact" v-html="email"></div>

        <div class="aboutContact aboutContactSns">
          <ul>
            <li v-for="s in about.sns" v-bind:s="s" v-bind:key="s.id">
              <a :href="s.url" :target="s.target">
                <span v-html="s.name"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      about: this.$store.getters.about,
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
.about-contact-sns {
  margin-right: 10px;
}

#about {
  margin: 120px auto 100px;
  padding: 0px;
}

.aboutName {
  font-family: Gotham;
  font-size: 46px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  text-align: left;
  color: #000000
}

.introduceHerSelf {
  font-family: Gotham;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.9;
  letter-spacing: -0.6px;
  text-align: left;
  color: #000000
}

.aboutContact {
  font-family: Gotham;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.7;
  letter-spacing: -0.6px;
  text-align: left;
  color: #bbbbbb
}

.aboutContactSns ul {
  list-style: none;
}

.aboutContactSns ul li {
  display: inline;
}

.aboutContactSns ul li:after {
  content: ' ';
}
</style>
