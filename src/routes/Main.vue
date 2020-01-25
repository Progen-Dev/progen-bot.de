<template>
  <div>
    <div class="main-header">
      <b-container fluid class="header-cont">
        <div class="logo mx-auto text-center">
          <img width="300" height="300" src="../assets/Logo.png" />
          <h1 class="font-montserrat mt-3 mb-0">Progen</h1>
          <h2 class="font-montserrat">Made with JDA</h2>
          <button class="down" @click="scrollTo('#about')">
            <p>This is Progen!</p>
            <div style="top: -20px;"><img width="80" src="../assets/down-vec.svg"/></div>
           <div style="top: -60px;"><img width="80" src="../assets/down-vec.svg"/></div>

          </button>
        </div>
      </b-container>
    </div>
    <b-container id="about" class="content mt-6">
      <h1 class="page-header">HEY! MY NAME IST PROGEN!</h1>
      <p class="mt-5">
        Progen has been pleased with us for {{calculateAge(new Date(2018-8-27))}} years.
        <br><br>
        Progen is a multifunctional bot that can be used in almost all categories. 
        <br><br>
        It is currently in use on more than 20 servers. Progen has a clear web interface for easy conditions. 
        <br><br>
        For more information, please read our <a href="https://github.com/ProgenBot/ProgenBot/wiki">Documentation</a> on Progen.
        <br><br>
        <img src="https://top.gg/api/widget/495293590503817237.svg?usernamecolor=FFFFFF&topcolor=000000" alt=" ">
      </p>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { RouterEventBus } from '../js/router-eventbus';

export default {
  name: 'Main',

  props: {
    msg: String
  },

  components: {
  },

  methods: {
    scrollTo(el) {
      var elem = this.$el.querySelector(el);
      if (elem) elem.scrollIntoView();
    },

    calculateAge(birthday) {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 2018);
    }
  },

  mounted() {
    RouterEventBus.$emit('mounted', this.$options.name);
  },
}
</script>

<style scoped>
  a {
    text-decoration: underline;
  }

  .main-header {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    transition: transform .25s ease-in-out;
  }

  .header-cont {
    padding: 20vh 0px;
  }

  .logo {
    opacity: .9;
  }

  .logo > h1 {
    font-weight: 300;
    font-size: 80px;
  }

  .logo > h2 {
    font-weight: 200;
    font-size: 27px;
  }

  .down {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(100% - 150px);
    margin-top: auto;
    color: white !important;
  }

  .down > div {
    position: relative;
  }

  .mt-6 {
    margin-top: 100px;
  }

  .yt-iframe > iframe {
    max-width: 100%;
    width: 900px;
    height: 510px;
    border: 0;
    margin: 0px auto;
  }

  @media screen and (max-height: 750px),
         screen and (max-width: 690px) {
    .logo > img {
      width: 150px;
      height: 150px;
    }

    .logo > h1 {
      font-weight: 300;
      font-size: 55px;
    }

    .logo > h2 {
      font-weight: 200;
      font-size: 19px;
    }
  }
</style>
