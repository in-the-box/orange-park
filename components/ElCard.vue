<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElCard'
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #FFFFFF;
  padding: 40px 80px;
  border-radius: 16px;
  @media screen and (max-width: 768px) {
    padding: 40px 16px;
    border-radius: 0;
  }
}
</style>
