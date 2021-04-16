<template>
<div class="background">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.background {
  background: linear-gradient(
    to bottom,
    rgb(231, 240, 253),
    rgb(172, 203, 238)
  );
  min-height: 100vh;
  max-height: 100vh;
  z-index: 0;
}
</style>
