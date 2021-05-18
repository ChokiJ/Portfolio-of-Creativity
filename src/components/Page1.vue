<template>
  <a-row style="height: 100vh">
    <a-col :span="24" class="parentBox">
      <div
        v-if="true"
        class="cardBox animate__animated animate__fadeInUp"
      ></div>
    </a-col>
  </a-row>
</template>
<script> 
export default {
  setup() {
      
  },
};
</script>
<style lang="scss" scoped>
.parentBox {
  display: grid;
  height: 100vh;
}
.cardBox {
  box-shadow: 0px 9px 16px -8px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 15px;
  align-self: center;
  justify-self: center;
  min-height: 85%;
  min-width: 85%;
  display: flex;
}
</style>