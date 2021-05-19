<template>
  <a-row style="height: 100vh">
    <a-col :span="14" class="parentBox">
      <div
        v-if="true"
        class="cardBox animate__animated animate__fadeInUp"
        @click="go"
      >
        <transition
          name="fade"
          leave-active-class="animate__animated animate__fadeOut animate__faster"
          mode="out-in"
        >
          <img v-if="showLogo" src="../assets/Elements.png" />
        </transition>
      </div>
    </a-col>
    <transition
      name="fade"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="out-in"
    >
      <a-col v-if="showLogo" :span="10" class="parentBox">
        <img class="animate__animated animate__fadeInUp animate__delay-1s" src="../assets/Text.png" />
      </a-col>
    </transition>
  </a-row>
</template>
<script>
import anime from "animejs";
export default {
  data() {
    return {
      showLogo: true,
    };
  },
  methods: {
    nextPage() {
      this.$router.push("/1");
    },
    go() {
      anime({
        targets: ".parentBox",
        translateX: 300,
        delay: 500,
        easing: "easeInQuad",
        duration: 300,
        begin: (anim) => {
          this.showLogo = false;
        },
        complete: (anim) => {
          this.$router.push("/1");
        },
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
.cardBox:hover {
  transition: box-shadow 0.5s;
  cursor: pointer;
  box-shadow: 0px 9px 64px -8px rgba(0, 0, 0, 0.32);
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