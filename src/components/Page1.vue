<template>
  <a-row style="height: 100vh">
    <a-col :span="24" class="parentBox">
      <div
        v-if="true"
        class="cardBox"
      >
      </div>
    </a-col>
  </a-row>
</template>
<script>
export default {
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
  width: 85%;
  display: flex;
  animation: 0.5s ease-out resize;
}
@keyframes resize {
  from { width: 49.6%; } to { width: 85%; } 
  
}
</style>