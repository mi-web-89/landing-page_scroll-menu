<template>
  <div class="home">
    <banner />

    <div class="container">
      <div ref="about">
        <about class="mt-5" />
      </div>

      <div ref="product" class="produk">
        <div class="mt-5 mb-5">
          <h1 class="border-bottom text-center">Produk</h1>
          <slider />
        </div>
      </div>

      <div ref="visi">
        <visi class="mt-5" />
      </div>
    </div>

    <scroll-to-top></scroll-to-top>
  </div>
</template>

<script>
import Slider from "@/components/home/Slider";
import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Visi from "@/components/home/Visi";
import ScrollToTop from "@/components/global/ScrollToTop";

export default {
  name: "home",
  components: {
    Slider,
    Banner,
    About,
    Visi,
    ScrollToTop
  },  
  mounted() {   
    // console.log("setPositionAboutY", this.$refs.about.offsetTop)
    this.$store.dispatch("setPositionAboutY", this.$refs.about.offsetTop - 80)
    this.$store.dispatch("setPositionProductY", this.$refs.product.offsetTop - 80)
    this.$store.dispatch("setPositionVisiY", this.$refs.visi.offsetTop)
  } 
}
</script>
