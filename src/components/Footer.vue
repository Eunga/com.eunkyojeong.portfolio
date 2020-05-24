<template>
  <footer id="footer">
    <div id="copyright">
      Designed by me & Developed by
      <a
        href="https://mrkarl.github.io"
        target="_blank"
        class="pankipark"
      >
        <span>Panki Park</span>
      </a> © 2020 All rights reserved.
    </div>

    <div id="contact">
      <span v-for="s in sns" v-bind:key="s.id">
        <a :href="s.url" :target="s.target">
          <img :src="getContactsUrl(s.icon)" class="contact-icon" />
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      about: this.$store.getters.about,
      sns: this.$store.getters.snsForFooter
    };
  },

  methods: {
    getContacts() {},
    getContactsUrl(pet) {
      try {
        var images = require.context("../assets/img/common", true, /\.png$/);
        var image = images("./" + pet + ".png");
        return image;
      } catch (e) {
        return pet;
      }
    }
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  padding: 0px 120px;
  background-color: #ffffff !important;
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;

  z-index: 10;
}

#copyright {
  font-family: HelveticaNeue;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #bbbbbb;
  flex: 1;
}

#contact {
  text-align: right;
  flex: 1;
}

.contact-icon {
  width: 16px;
  height: 16px;
  margin-left: 38px;
  transition: all 0.2s ease-in;
  opacity: 0.3;
}

.pankipark {
  text-decoration: none;
  color: #bbbbbb;
  transition: all 0.2s ease-in;
}

.pankipark:hover,
.contact-icon:hover {
  cursor: pointer;
  color: black;
  opacity: 1;
}

/* Media Queries */
@media screen and (max-width: 767px) {
  #footer {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #footer {
    display: none;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #footer {
    height: 80px;
    padding: 0px 80px;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1776px) {
  #footer {
    height: 120px;
    padding: 0px 120px;
  }
}

@media screen and (min-width: 1777px) {
  #footer {
    height: 120px;
    padding: 0px 120px;
  }
}
</style>
