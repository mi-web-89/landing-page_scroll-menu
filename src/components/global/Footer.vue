<template>
  <footer id="footer">
    <div class="row">
      <div class="media-social col-md-5">
        <div class="container">
          <div class="text-center mt-2 mb-3 fs-24">We love new friends!</div>
          <!-- icons -->
          <div class="d-flex justify-content-around">
            <div>
              <span class="fa-facebook-circle fs-18"></span>
            </div>
            <div>
              <span class="fa-instagram-cirlce fs-18"></span>
            </div>
            <div>
              <span class="fa-twitter-circle fs-18"></span>
            </div>
            <div>
              <span class="fa-facebook-circle fs-18"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright col-md-7 align-self-center text-right pr-4">@{{nowYear}} Blank. All Rights Reserved.</div>
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
    padding: 1.1rem 2rem 1.2rem 5.5rem;
  }
  
  .copyright {
    background-color: transparent;
    font-size: 0.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>

