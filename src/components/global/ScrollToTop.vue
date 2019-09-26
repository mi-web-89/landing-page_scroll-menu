<template>
  <button
    type="button"
    @click="scrollToTop()"
    id="btn-to-top"
    :class="{show: lastPosition > 200}"
  >Top</button>
</template>
<script>
export default {
  data() {
    return {
      lastPosition: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.lastPosition = window.scrollY;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }    
  }
};
</script>

<style lang="scss">
#btn-to-top {
  z-index: 1000;
  position: fixed;
  bottom: 30px;
  right: 20px;
  font-size: 18px;
  padding: 10px 12px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  display: none;

  &.show {
    display: block;
  }
}
</style>