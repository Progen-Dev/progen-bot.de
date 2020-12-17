<template>
  <div>
    <div class="main-header">
      <b-container fluid class="header-cont">
        <div class="logo mx-auto text-center">
          <img width="300" height="300" src="../assets/social/logo_round.png" />
          <h1 class="font-montserrat mt-3 mb-0">Progen</h1>
          <h2 class="font-montserrat">Multifunctional Discord Bot with Webinterface. 
                <br><br>
            For {{calculateAge(new Date(2018-8-27))}} years.</h2>
          <button class="down" @click="scrollTo('#about')">
            <p>See features</p>
            <div style="top: -20px;"><img width="80" src="../assets/svg/down-vec.svg"/></div>
           <div style="top: -60px;"><img width="80" src="../assets/svg/down-vec.svg"/></div>
          </button>
        </div>
      </b-container>
    </div>
    <b-container id="about" class="content mt-6">
      <h1 class="page-header">HEY! MY NAME IS PROGEN!</h1>
      <div class="mt-5">
<h3>Fun</h3>
Progen offers little games! Don't know what to do? Better play a game with Progen.
<br><br>
<div>
  <h3>MUSIC</h3>
  Progen can play your favorite music from Youtube or other MP3 streams like radio stations. You can control the music player via the <a href="https://pwi.progen-bot.de">PWI</a> or with simple text commands.
  And last but not least, you can play music in multiple channels at the same time! Just invite Progens music bots INVITE.
  You can also create playlists to ensure the right music at the right time! For more infrmation see our wiki.
</div>
<br><br>
<h3>XP System</h3>
The more you write, the more XP you gain! See who is active on your server. Spawming does not count!
<br><br>
<h3>MODERATION</h3>
Manage your server and its members. Warn, kick or ban people. You can also mute peaple spawming or using the wrong tone. Clear the channel when there are too much messages and more!
<br><br>
<h3>Server Customization</h3>
Change the command prefix of Progen to anything you like! Do you like fish? Enable or disable Ok, let's play some music with 'fish?music play'. Enable or Disable notifications when you level up or create temporary voice channels!
<br><br>
<h3>GET PROGEN ON YOUR SERVER</h3>
Progen: <a href="https://discordapp.com/oauth2/authorize?client_id=495293590503817237&scope=bot&permissions=8">Click</a>
<br>
Progen Music 1: <a href="https://discordapp.com/oauth2/authorize?client_id=662647209929605126&scope=bot&permissions=3145728">Click</a>
<br>
Progen Music 2: <a href="https://discordapp.com/oauth2/authorize?client_id=662647378385305620&scope=bot&permissions=3145728">Click</a>
<br><br>
<h3>DISCORD</h3>
This is the Progen discord server! Take a look to get support or just hang out with the dev team. Every contribution or requests are welcome!
<br>
<a href="https://discord.gg/rPeBPkr">JOIN NOW</a>
<br><br>
<h3>DOKUMENTATION</h3>
<a href="https://github.com/Progen-Dev/Progen/wiki">Click</a>

      </div> 
    </b-container>
   <fotter>
     </fotter>
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
