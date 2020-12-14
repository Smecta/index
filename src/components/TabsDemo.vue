<template>
  <div>
    <h1>动态获取表单项</h1>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <!-- <el-form-item
        prop="规则"
        label="规则"
        
      >

        <el-select v-model="dynamicValidateForm.domain[0].value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="dynamicValidateForm.domain[0].value1" placeholder="请选择第二列">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="dynamicValidateForm.domain[0].value2" placeholder="请选择第三列">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item> -->

      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'报警规则' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: '不能为空',
          trigger: 'blur',
        }"
      >
        <el-select v-model="domain.value" placeholder="请选择" value-key="code" @change="changeValue1($event)">
          <el-option
            v-for="(item,index) in data1"
            :key="index"
            :label="item.name"
            :value="item.code"
          >
          </el-option>
        </el-select>
        <el-select v-model="domain.value1" placeholder="请选择第二列"  @change="pullValue1($event)">
          <el-option
            v-for="item in data2"
            :key="item.methodCode"
            :label="item.methodName"
            :value="item.methodCode"
          >
          </el-option>
        </el-select>
        <el-select v-model="domain.value2" placeholder="请选择第三列">
          <el-option
            v-for="item in options"
            :key="item.methodCode"
            :label="item.methodName"
            :value="item.methodCode"
          >
          </el-option>
        </el-select>
        <el-button v-show="index > 0" @click.prevent="removeDomain(domain)"
          >删除</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')"
          >提交</el-button
        >
        <el-button @click="addDomain">新增规则</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: "",
            value1: "",
            value2: "",
          },
        ],
      },

      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      dataValue:[],
      data1: [],
      data2: [],
      value: "",
      moduleTypeId: "1",
      businessId: "DR1P749N40ETSJ_SUB1P78XXFYNZ21",
      keyCode: null,
    };
  },
  created() {
    this.getValue();
  },
  methods: {
    async getValue() {
      // let params = {
      //   moduleTypeId: this.moduleTypeId,
      //   businessId: this.businessId,
      // }
      // const res = await axios.get("http://10.88.212.177:8888/moduletype/keys", {
      //   params
      // });
      const res = await axios.get("http://10.88.212.121:8081/data.json")
      console.log(res);
      this.data1 = res.data.data;
    },
    // changeValue(val) {
    //   console.log(val);
    //   // this.keyCode    
    // },
    changeValue1(val){
      console.log(val);
      this.data1.map(item => {
        // console.log(item);
        if(val == item.code){
          console.log(1);
          this.data2 = item.data
        }
      })
      // this.keyCode = val
      // this.getValue2()


    },
    pullValue1(val){
      // this.changeValue()
      console.log(val);
      // this.getValue2()
      
    },
    async getValue2() {
      let params = {
          moduleTypeId: this.moduleTypeId,
          businessId: this.businessId,
          keyCode: this.keyCode,
      }
      const res = await axios.get(
        "http://10.88.212.177:8888/moduletype/method",
        {
          params
        }
      );
      console.log(res);
      this.data2 = res.data.data

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          console.log(this.dynamicValidateForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },
  },
};
</script>

<style></style>
