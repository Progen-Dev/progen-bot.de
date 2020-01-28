<template>
  <div>
    <b-container fluid class="header d-flex">
      <img 
        src="../assets/Logo.png"
        width="40"
        height="40"
        class="header-img mr-5 my-auto"
      />
      <button 
        v-for="btn in btns" 
        class="header-btn" 
        :class="{ 'active': btn.active }"
        :key="btn.title"
        @click="btnClick(btn)"
      >
        {{ btn.title }}
      </button>
    </b-container>

    <!-- BURGER HEADER -->
    <b-container fluid class="header header-burger d-none">
      <img 
        src="../assets/Logo.png"
        width="30"
        height="30"
        class="header-img mr-4 my-auto"
      />
      <BurgerButton 
        @click="burgerBtnClick"
        ref="burgerBtn"
      />
      <b-container fluid 
        :class="burgerClasses"
        class="burger-buttons"
      >
        <button 
          v-for="btn in btns" 
          class="header-btn burger-btn" 
          :class="{ 'active': btn.active }"
          :key="btn.title"
          @click="btnClick(btn)"
        >
          {{ btn.title }}
        </button>
      </b-container>
    </b-container>

    <div 
      class="burger-closer"
      :class="{ 'd-none': !burgerActive }"
      @click="burgerClose()"
    >   
    </div>
  </div>
</template>

<script>
import BurgerButton from '../components/BurgerButton';
import { RouterEventBus } from '../js/router-eventbus';
import { setTimeout } from 'timers';

export default {
  name: 'Header',

  props: {
    msg: String
  },

  components: {
    BurgerButton,
  },

  data() {
    return {
      burgerActive: false,
      setBurgerActive: false,
      burgerClasses: {
        'burger-active': false,
        'd-none' : true,
      },
      btns: [
        {
          name: 'Main',
          title: 'Home',
          window_title: 'Progen',
          route: '/',
          active: true,
        },
        {
          name: 'Discord',
          title: 'Discord',
          window_title: 'Progen',
          route: '/Discord',
          active: true,
        },
      ],
    };
  },

  methods: {
    btnClick(btn) {
      this.$router.push(btn.route);
      window.document.title = btn.window_title;
    },

    burgerBtnClick(active) {
      this.burgerActive = active;
      if (active) {
        this.burgerClasses['d-none'] = false;
        setTimeout(() => {
          this.burgerClasses['burger-active'] = true;
        }, 25);
      } else {
        this.burgerClasses['burger-active'] = false;
        setTimeout(() => {
          this.burgerClasses['d-none'] = true;
        }, 250);
      }
    },

    burgerClose() {
      this.$refs.burgerBtn.setActive(false);
    },
  },

  created() {
    RouterEventBus.$on('mounted', (name) => {
      this.btns.forEach((b) => {
        if (b.name === name) {
          b.active = true;
        } else {
          b.active = false;
        }
      });
    });
  },
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0px;
    z-index: 5;
    color: white !important;
    background-color: var(--c-bg-header) !important;
    font-family: 'Montserrat', sans-serif;
  }

  .header-btn {
    cursor: pointer;
    color: white;
    border-style: none;
    margin: auto 0;
    padding: 24px 24px;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0);

    transition: all .25s ease-in-out;
  }

  .active {
    background-color: rgba(0, 0, 0, 0.15);
  }

  .header-btn:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  .burger-btn {
    width: 100%;
    margin: 0px;
    padding: 10px;
  }

  .burger-buttons {
    position: relative;
    top: -50px;
    opacity: 0;

    transition: all .25s ease-in-out;
  }

  .burger-active {
    top: 0px;
    opacity: 1;
  }

  .burger-closer {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  @media screen and (max-width: 690px) {
    .header {
      display: none !important;
    }

    .header-burger {
      display: block !important;
    }
  }
</style>
