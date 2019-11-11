<template>
  <input
    :class="['input', isError ? 'is-error' : '']"
    :type="type"
    :placeholder="placeholder"
    @input="onInput"
    @keyup.enter="onEnter"
  >
</template>

<script>
export default {
  name: 'ElInput',
  props: {
    isError: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'input'
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
.input {
  appearance: none;
  width: 100%;
  box-shadow: none;
  border: none;
  padding: 14px;
  font-size: 16px;
  border: 3px solid #eee;
  border-radius: 8px;
  background: #fff;
  &.is-error {
    border: 3px solid #ef0d0d;
  }
}
</style>
