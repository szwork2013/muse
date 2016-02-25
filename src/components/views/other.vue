<template>
  <div style="text-align:center; width:1200px; height:400px; color:#FFF; background-color:green; margin:30px auto
  ">
    <h2>{{log}}</h2>
    <h3>{{user}}</h3>
  </div>
</template>

<script>
export default {
  name: 'other',
  props: {
    user: ''
  },
  data () {
    return {
      log: 'Hello Other!'
    }
  }
}
</script>