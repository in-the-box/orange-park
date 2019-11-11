<template>
  <button :class="['button', block ? 'is-block' : '']" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    block: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  color: #fff;
  background-color: #EB5902;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  border: solid 4px #EB5902;
  border-radius: 8px;
  transition: ease-in .2s;
  &.is-block {
    width: 100%;
  }
}
</style>
