<template>
  <el-row class="price-box" justify="center" :gutter="20">
    <el-col :span="24">
      <div class="price-item">
        <div>买入价格</div>
        <div>
          <el-input v-model="buyPrice" size="default" class="item-input">
            <template #prefix>
              <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
            </template>
          </el-input>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4">
      <div class="price-item">
        <div>周一</div>
        <el-input v-model="sellPrice[0][0]" size="default" placeholder="上午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
        <el-input v-model="sellPrice[0][1]" size="default" placeholder="下午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4">
      <div class="price-item">
        <div>周二</div>
        <el-input v-model="sellPrice[1][0]" size="default" placeholder="上午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
        <el-input v-model="sellPrice[1][1]" size="default" placeholder="下午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4">
      <div class="price-item">
        <div>周三</div>
        <el-input v-model="sellPrice[2][0]" size="default" placeholder="上午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
        <el-input v-model="sellPrice[2][1]" size="default" placeholder="下午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4">
      <div class="price-item">
        <div>周四</div>
        <el-input v-model="sellPrice[3][0]" size="default" placeholder="上午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
        <el-input v-model="sellPrice[3][1]" size="default" placeholder="下午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4">
      <div class="price-item">
        <div>周五</div>
        <el-input v-model="sellPrice[4][0]" size="default" placeholder="上午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
        <el-input v-model="sellPrice[4][1]" size="default" placeholder="下午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4">
      <div class="price-item">
        <div>周六</div>
        <el-input v-model="sellPrice[5][0]" size="default" placeholder="上午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
        <el-input v-model="sellPrice[5][1]" size="default" placeholder="下午" class="item-input">
          <template #prefix>
            <img :src="IconMoney" style="width: 1.1em; height: 1.1em;" />
          </template>
        </el-input>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import IconMoney from '@assets/money.svg';
import { usePricesStore } from '@stores/prices'

const priceStore = usePricesStore()

console.log(1111, priceStore.buyPrice)

let buyPrice = priceStore.buyPrice
let sellPrice = priceStore.sellPrice
</script>

<style lang="scss" scoped>
  .price-box {
    padding-bottom: 10px;
    border-radius: 25px;
    background: url('@assets/background.jpg');
  }

  .price-item {
    margin-top: 10px;
    padding: 14px;
    border-radius: 25px;
    background: #fff;
    font-size: 16px;
    font-weight: bold;
  }

  .item-input {
    margin-top: 8px;
    border-bottom: 1px solid #eee;

    /* stylelint-disable-next-line selector-class-pattern */
    :deep(.el-input__wrapper) {
      box-shadow: none;
    }
  }
</style>
