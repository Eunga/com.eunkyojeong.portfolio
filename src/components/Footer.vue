<template>
  <footer id="footer">
    <div id="copyright">
      Designed by me & Developed by <a href="https://mrkarl.github.io" target="_blank" class="pankipark"><span>Panki Park</span></a> © 2019 All rights reserved.
    </div>

    <div id="contact">
      <span v-for="s in sns" v-bind:key="s.id">
        <a :href="s.url" :target="s.target">
          <img :src="getContactsUrl(s.icon)" class="contact-icon"/>
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
    }
  },

  methods: {
    getContacts() {

    },
    getContactsUrl(pet) {
      try {
        var images = require.context('../assets/img/common', true, /\.png$/)
        var image = images('./' + pet + '.png');
        return image;
      } catch (e) {
        return pet;
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  #footer {
    display: none;
  }
}

#footer {
  padding: 0px 120px;
  background-color: #ffffff !important;
  position: relative;
  transition: all .3s ease-in;
  height: 120px;
  display: flex;
  align-items: center;
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
  margin-left:38px;
  transition: all .2s ease-in;
  opacity: .3;
}

.pankipark {
  text-decoration: none;
  color: #bbbbbb;
  transition: all .2s ease-in;
}

.pankipark:hover, .contact-icon:hover {
  cursor: pointer;
  color: black;
  opacity: 1;
}

</style>
