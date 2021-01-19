<template>
  <div>
    <h1>
      Vue-multiselect
    </h1>
    <multiselect
      v-model="value1"
      :options="options1"
      placeholder="请选择你要选择干嘛"
      selectLabel="回车以便去确认选择"
      deselectLabel="回车以便去确认删除"
      selectedLabel="选中"
    >
      <!-- <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong></template> -->
    </multiselect>
    <pre class="language-json"><code>{{ value  }}</code></pre>
    <multiselect
      v-model="value1"
      :options="options2"
      track-by="name"
      label="name"
      :searchable="false"
      :allow-empty="false"
      placeholder="请选择你要选择干嘛"
      selectLabel="回车以便去确认选择"
      deselectLabel="回车以便去确认删除"
      selectedLabel="选中"
    >
      <template slot="singleLabel" slot-scope="{ option }"
        ><strong>{{ option.name }}</strong> is written in<strong>
          {{ option.language }}</strong
        ></template
      >
    </multiselect>
    <pre class="language-json"><code>{{ value  }}</code></pre>
    <hr />
    <h1>
      vue中select绑定多个值及回显-数据回显
    </h1>
    <el-select v-model="value" placeholder="请选择" @change="change">
      <el-option
        v-for="(item, index) in options"
        :key="item.value"
        :label="item.label"
        :value="index"
      >
      </el-option>
    </el-select>
    <el-button @click="reload">重载数据</el-button>
    <br>
    <div>{{options[this.value]}}</div>
  </div>
</template>

<script>
// import Multiselect from 'vue-multiselect'
// import "vue-multiselect/dist/vue-multiselect.min.css"

export default {
  // components: { Multiselect },
  data() {
    return {
      value1: "",
      options1: ["火车头", "飞机", "导弹"],
      options2: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP", $isDisabled: true },
        { name: "Phoenix", language: "Elixir" },
      ],
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
      value: "",
    };
  },
  created() {
      this.moni()
  },
  methods: {
    change() {
      console.log(this.options[this.value]);
    },
    reload() {
        this.moni()
    },
    moni() {
      //   模拟后端拿到数据
      setTimeout(() => {
        this.options.forEach((item, index) => {
          if (item.value === "选项4") {
            this.value = index;
          }
        });
      }, 1000);
    },
  },
};
</script>

<style></style>
