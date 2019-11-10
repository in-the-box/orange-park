<template>
  <div class="formItem">
    <div class="formItem-label">
      <div v-if="name" class="formItem-name">
        {{ name }}
      </div>
      <div class="formItem-ourterRequired">
        <div class="formItem-required">
          必須
        </div>
      </div>
    </div>
    <div class="formItem-value">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElFormItem',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  margin-bottom: 16px;
  &-label {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  &-ourterRequired {
    display: flex;
    align-items: center;
  }
  &-required {
    display: inline-block;
    background: #ef0d0d;
    color: #fff;
    font-size: 10px;
    margin-left: 20px;
    padding: 3px 6px;
    border-radius: 2px;
    font-weight: bold;
    line-height: 1;
  }
  &-name {
    font-weight: bold;
  }
}
</style>
