<template>
  <img v-if="src" :src="src" />
</template>

<script>
import makeBlockie from "ethereum-blockies-base64";

export default {
  props: {
    address: {
      type: String
    }
  },
  computed: {
    src: function() {
      return this.address ? makeBlockie(this.address) : "";
    }
  }
};
</script>
