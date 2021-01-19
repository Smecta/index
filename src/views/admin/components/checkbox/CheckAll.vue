<template>
  <el-card class="wrapper">
    <div class="title">全选Demo</div>
    <div class="check">
      <el-checkbox v-model="checkAll" label="全选" :indeterminate="isIndeterminate" @change="handleCheckAllChange"></el-checkbox>
    </div>
    <el-checkbox-group v-model="selected" @change="handleCheckedChange">
      <demand-item
        v-for="item in demandData.data"
        :key="item.id"
        :data="item"
      ></demand-item>
    </el-checkbox-group>
  </el-card>
</template>
<script>
import DemandItem from "./DemandItem.vue";
export default {
  components: {
    DemandItem,
  },
  data() {
    return {
      isIndeterminate: false,
      checkAll:false,
      selected: [],
      demandData: {
        length: 5,
        data: [
          { id: 1, title: "中顺洁柔股份有限公司", code: "2325476563f63" },
          { id: 2, title: "旺仔有限公司", code: "2325476563f63" },
          { id: 3, title: "洁柔股份有限公司", code: "2325476563f63" },
          { id: 4, title: "中柔股份有限公司", code: "2325476563f63" },
          { id: 5, title: "顺柔有限公司", code: "2325476563f63" },
        ],
      },
    };
  },
  methods:{
    //点击全选按钮
    handleCheckAllChange(val) {
      this.selected = val ? this.demandData.data.map(i => i.id) : []
      console.log(this.selected);
      this.isIndeterminate = false
    },
    //checkbox-group深度监听子项checkbox点击
    handleCheckedChange(value){
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.demandData.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.demandData.length
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: #fafafa;
  .title{
    font-weight: bold;
    font-size: 18px;
  }
  .check {
    margin: 10px 0 20px 20px;
  }
}
</style>
