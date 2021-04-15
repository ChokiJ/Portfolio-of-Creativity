<template>
  <div class="background">
    <a-row style="height: 100vh">
      <a-col :span="14" class="parentBox">
        <div class="cardBox animate__animated animate__fadeInUp">
          <img src="../assets/Elements.png" />
        </div>
      </a-col>
      <a-col :span="10" class="parentBox animate__animated animate__fadeIn animate__delay-1s">
        <img src="../assets/Text.png" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang="scss" scoped>
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
.parentBox {
  display: grid;
  height: 100vh;
}
.cardBox {
  box-shadow: 0px -6px 16px -8px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 15px;
  align-self: center;
  justify-self: center;
  min-height: 85%;
  min-width: 85%;
  display: flex;
}
.parentBox img {
  max-width: 50%;
  max-height: 50%;
  display: block;
  margin: auto;
}
</style>