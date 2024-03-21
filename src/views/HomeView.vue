<template>
  <div class="page page-turnip-price">
    <div class="title">
      <img class="title-logo" src="@assets/logo.png" />
      <div class="title-content">
        动森大头菜价格计算器 V{{ version }}
      </div>
    </div>
    <PriceBox />
    <!-- 图表 -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PriceBox from '@components/PriceBox.vue';

let version = ref(VITE_APP_VERSION);
</script>

<style lang="scss" scoped>
.page-turnip-price {
  .title {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 10px;
  }

  .title-logo {
    width: 300px;
  }

  .title-content {
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
