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
        <div class="introduceHerSelf">{{ introduce }}</div>

        <div class="aboutContact">
          <a href="tel:+821020077774">{{ phoneNumber }}</a>
        </div>

        <div class="aboutContact">{{ email }}</div>

        <div class="aboutContact aboutContactSns">
          <ul>
            <!-- <li v-for="s in sns">
              <a v-bind:s="s.url">{{ s.name }}</a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import about from "../assets/json/about.json";
export default {
  name: "About",
  data() {
    return about;
  }
};
</script>

<style>
.about-contact-sns {
  margin-right: 10px;
}

#about {
  margin-bottom: 100px;
  margin: 0 auto;
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
</style>
