<template>
  <textarea
    :class="['textarea', isError ? 'is-error' : '']"
    @input="onInput"
    @keyup.enter="onEnter"
  />
</template>

<script>
export default {
  name: 'ElTextarea',
  props: {
    isError: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (e) {
      this.str = e.target.value
      this.$emit('input', e.target.value)
    },
    onEnter (e) {
      this.$emit('enter')
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea {
  appearance: none;
  width: 100%;
  box-shadow: none;
  border: none;
  padding: 14px;
  font-size: 16px;
  border: 3px solid #eee;
  border-radius: 8px;
  background: #fff;
  height: 200px;
  resize: none;
  &.is-error {
    border: 3px solid #ef0d0d;
  }
}
</style>
