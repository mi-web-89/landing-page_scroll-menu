<template>
  <carousel :perPageCustom="[[320, 1], [596, 1], [768, 2], [1024, 3]]">
    <slide>
      <h3 class="text-center">Slide content 1</h3>
      <div
        class="content-slide p-2"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </slide>
    <slide>
      <h3 class="text-center">Slide content 2</h3>
      <div
        class="content-slide p-2"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </slide>
    <slide>
      <h3 class="text-center">Slide content 3</h3>
      <div
        class="content-slide p-2"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </slide>
  </carousel>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
export default {
    components: {
        Carousel,
        Slide
    }
};
</script>