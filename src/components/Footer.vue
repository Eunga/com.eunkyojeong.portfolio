<template>
  <footer id="footer">
    <div id="copyright">
      Designed by me & Developed by <a href="https://mrkarl.github.io" target="_blank" class="pankipark"><span>Panki Park</span></a> © 2019 All rights reserved.
    </div>

    <div id="contact">
      <span 
        v-for="sns in about.sns.filter((sns) => sns.isAvailable)"
        v-bind:key="sns.id">
        <a :href="sns.url"
        :target="sns.target">
          <img :src="getContactsUrl(sns.icon)" 
          class="contact-icon"/>
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
}

#copyright {
  font-family: HelveticaNeue;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: -0.3px;
  text-align: left;
  color: #bbbbbb;
  line-height: 120px;
  position: absolute;

}

#contact {
  text-align: right;
  line-height: 120px;
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
