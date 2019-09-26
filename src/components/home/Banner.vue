<template>
  <div id="banner" class="parallax">
    <!-- <picture>
        <source srcset="@/assets/img/banner-sm.png" media="(max-width: 576px)" />
        <source srcset="@/assets/img/banner.png" />
        <img src="@/assets/img/banner.png" alt="Banner" width="100%" height="auto" />
    </picture>-->
  </div>
</template>

<style lang="scss" scoped>
.parallax {
  min-height: 600px;
  background-image: url("~@/assets/img/banner-sm.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    background-image: url("~@/assets/img/banner.png");
  }
}
</style>