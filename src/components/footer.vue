<template>
  <footer>
    <div class="footer">
      <div class="fix">
        <div class="muse"><img src="../assets/muse.svg" height="34" alt=""></div>
        <div class="right">
          <p>Made by Vue.js with Mad and caffeine.  <a href="http://weibo.com/zyh0921/" target="blank">Author @Aford</a></p>
        </div>
      </div>
      <div class="clip"><div class="backTop" @click="goTop"></div></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      log: 'Hello footer!'
    }
  },
  methods: {
    goTop: function(time, fn){
      var dur = 300;
      if(time) dur = time;
      $('body').animate({scrollTop:0}, dur, fn);
    }
  }
}
</script>