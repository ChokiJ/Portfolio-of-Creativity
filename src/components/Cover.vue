<template>
  <a-row style="height: 100vh">
    <a-col :span="14" class="parentBox">
      <div
        v-if="true"
        class="cardBox animate__animated animate__fadeInUp"
        @click="nextPage"
      >
        <img src="../assets/Elements.png" />
      </div>
    </a-col>
    <a-col :span="10" class="parentBox">
      <img
        v-if="true"
        src="../assets/Text.png"
        class="animate__animated animate__fadeIn animate__delay-1s"
      />
    </a-col>
  </a-row>
</template>
<script>
import anime from 'animejs';
export default {
  methods: {
    nextPage() {
      this.$router.push("/1");
    },
    go() {
      anime({
        targets: ".cardbox",
        translateX: 250
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.parentBox {
  display: grid;
  height: 100vh;
}
.cardBox {
  transition: box-shadow 0.5s;
  box-shadow: 0px 9px 16px -8px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 15px;
  align-self: center;
  justify-self: center;
  height: 85%;
  width: 85%;
  display: flex;
}
.cardBox:hover{
  transition: box-shadow 0.5s;
  cursor: pointer;
  box-shadow: 0px 9px 64px -8px rgba(0, 0, 0, 0.16);
  background-color: white;
  border-radius: 15px;
  align-self: center;
  justify-self: center;
  height: 85%;
  width: 85%;
  display: flex;
}
.parentBox img {
  max-width: 50%;
  max-height: 50%;
  display: block;
  margin: auto;
}
</style>