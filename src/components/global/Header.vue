<template>
  <nav id="nav" :class="{active: scrollPosition > 20}">
    <div class="navbar">
      <!-- toggler -->
      <button class="navbar-toggler" type="button" @click="showMenu = !showMenu">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <!-- logo -->
      <div class="brand">
        <span>Logo</span>
      </div>

      <!-- menu -->
      <div class="collapse navbar-nav-collapse" :class="{'show-menu': showMenu}">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <!-- <router-link class="nav-link" to="#">Beranda</router-link> -->
            <a class="nav-link" href="javascript:void(0)" @click="scrollToTop()">Beranda</a>
          </li>
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="#cAbout">Tentang Kami</router-link> -->
            <a class="nav-link" href="javascript:void(0)" @click="scrollToAbout()">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="#cProduk">Produk</!-->
            <a class="nav-link" href="javascript:void(0)" @click="scrollToProduct()">Produk</a>
          </li>
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="#cVisi">Visi & Misi</router-link> -->
            <a class="nav-link" href="javascript:void(0)" @click="scrollToVisi()">Visi & Misi</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "appMenu",
  data() {
    return {
      showMenu: false,
      scrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.addEventListener("scroll", this.onScroll);
  },
  computted: {
    aboutY() {
      console.log("aboutY", this.$store.getters.getAboutY)  
      return this.$store.getters.getAboutY
    }
  },
  methods: {
    //scroll the window
    onScroll() {
      this.scrollPosition = window.scrollY      
    },
    scrollToTop() {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     })
    },
    scrollToAbout() {           
      //console.log("aboutY", this.aboutY)      
      window.scrollTo({
        top:this.$store.getters.getAboutY,
        behavior: "smooth"
      })
    },
    scrollToProduct() {           
      //console.log("aboutY", this.aboutY)      
      window.scrollTo({
        top:this.$store.getters.getProductY,
        behavior: "smooth"
      })
    },
    scrollToVisi() {           
      //console.log("aboutY", this.aboutY)      
      window.scrollTo({
        top:this.$store.getters.getVisiY,
        behavior: "smooth"
      })
    }
  }
};
</script>

<style lang="scss">
#nav {
  $text-navbar: #343a40;
  $border-bottom: rgba(255, 255, 255, 0.3);
  $nav-bg-transparent: rgba(255, 255, 255, 0.5);
  $nav-bg-active: rgba(255, 255, 255, 1);

  background-color: $nav-bg-active;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 7.5px 0 rgba(0, 0, 0, 0.2);

  .navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;

    .brand {
      margin: 0 0.5rem 0.5rem 0;
      font-size: 1.25rem;
      line-height: inherit;
      white-space: nowrap;
    }

    .navbar-toggler {
      padding: 0.25rem 0.5rem;
      font-size: 1.25rem;
      line-height: 1;
      // color: rgba(255, 255, 255, 0.5);
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.25rem;
      margin: 0.7rem 0.5rem;

      .hamburger span {
        height: 1px;
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: $text-navbar;
        display: block;
        // transition: 0.33s;

        &:nth-child(1) {
          width: 12px;
        }
        &:nth-child(2) {
          width: 24px;
        }
        &:nth-child(3) {
          width: 12px;
        }
      }
    }

    .navbar-nav {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      list-style: none;

      .nav-item:first-child {
        border-top: solid 1px $border-bottom;
      }
      .nav-item {
        border-bottom: solid 1px $border-bottom;
      }

      .nav-link {
        display: block;
        padding: 0.5rem 1rem;
        color: $text-navbar;
      }

      .nav-link:hover,
      .nav-link:focus {
        text-decoration: none;
      }
    }

    .navbar-nav-collapse {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-align: center;
      align-items: center;
      // background-color: $nav-collapse-background;
    }

    .collapse:not(.show) {
      display: none;
    }

    .show-menu {
      display: block !important;
      border-top: solid 1px rgba(0, 0, 0, 0.2);
    }
  }

  @media only screen and (min-width: 768px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: $nav-bg-transparent;
    box-shadow: none;

    &.active {
      background-color: $nav-bg-active;
      box-shadow: 0 2px 7.5px 0 rgba(0, 0, 0, 0.2);
    }

    .navbar {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      padding: 0.25rem 0.5rem;
      max-width: 1140px;
      margin: auto;
      .brand {
        margin-right: 1rem;
      }

      .navbar-toggler {
        display: none;
      }

      .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row;

        .nav-item {
          border: none !important;
        }

        .nav-link {
          padding-right: 1rem;
          padding-left: 1rem;
        }
      }

      .navbar-nav-collapse {
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        flex-grow: 0;
        border-top: none;
      }
    }
  }
}
</style>
