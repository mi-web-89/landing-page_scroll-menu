<template>
  <footer id="footer" class="container-fluid">
    <div class="row">
      <div class="media-social col-4">
        <div class="container">
          We love new friends!
        </div>
        <span class="icon icon-facebook2"></span>
      </div>
      <div class="copyright col-8 pt-5 pb-5 text-right">
        @{{nowYear}} Blank. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    nowYear() {
      const dt = new Date();
      return dt.getFullYear();
    }
  }
};
</script>

<style lang="scss">
#footer {
  background-color: #535c68;
  margin-top: 5rem;
  color: #ecf0f1;

  .media-social {
    background-color: #2980b9;
  }

  .copyright {
    background-color: transparent;
    font-size: 0.75rem;
  }
}
</style>

