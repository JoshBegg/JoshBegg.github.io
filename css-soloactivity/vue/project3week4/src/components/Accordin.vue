<template>
  <div>
    <button
      @click="toggleAccordion()"
      class="flex items-center space-x-1"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title" />
    </button>

    <div v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>
<style scoped>
button {
  width: 50%;
  height: 10%;
}
div {
  background: #FFF8B1;
}
</style>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>