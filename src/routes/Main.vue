<template>
  <div>
    <div class="main-header">
      <b-container fluid class="header-cont">
        <div class="logo mx-auto text-center">
          <img width="300" height="300" src="../assets/Logo.png" />
          <h1 class="font-montserrat mt-3 mb-0">Progen</h1>
          <h2 class="font-montserrat">Mutlifunction DiscordBot with Webinterface</h2>
          <button class="down" @click="scrollTo('#about')">
            <p>This is Progen!</p>
            <div style="top: -20px;"><img width="80" src="../assets/down-vec.svg"/></div>
           <div style="top: -60px;"><img width="80" src="../assets/down-vec.svg"/></div>
          </button>
        </div>
      </b-container>
    </div>
    <b-container id="about" class="content mt-6">
      <h1 class="page-header">HEY! MY NAME IS PROGEN!</h1>
      <p class="mt-5">
        Progen is {{calculateAge(new Date(2018-8-27))}} years old.
        <br><br>
        Progen is a feature rich discord bot with advanced functionality. It features a web interface, the PWI (Progen Web Interface), to manage the bot and moderate your server.
        For more information read our WIKI
        <ul>
          <h3>Features</h3>
          A list of commands for 
          <li>General</li>
          <li>Moderation</li>
          <li>Music</li>
          <li>Fun</li>
          <li>Other</li>
        </ul>
        <br><br>
        A very big thank you to Zekro!
        <br><br>
        <img src="https://top.gg/api/widget/495293590503817237.svg?usernamecolor=FFFFFF&topcolor=000000" alt=" ">
        <br><br>
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
