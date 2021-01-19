<template>
  <div>
    <h1>vue - slot</h1>
    <p>单个插槽｜匿名插槽</p>
    <SlotChildDemo url="http://www.baidu.com">
      百度一下 你就知道
    </SlotChildDemo>
    <hr />
    <h1>vue - slot2</h1>
    <p>需要多个插槽时，可以利用slot 元素的一个特殊的特性：name来定义具名插槽</p>
    <SlotChildDemo2>
      <h2 slot="header" style="color:tomato">
        这是具名插槽的头部内容
      </h2>

      <span>这是main的内容</span>
      <span>这是main的p的内容</span>

      <h2 slot="footer">
        这是具名插槽的脚步内容
      </h2>
      <template v-slot:qt>
        <h3>嵌套一层的具名插槽</h3>
      </template>
    </SlotChildDemo2>
    <hr />
    <h1>vue - slot3</h1>
    <p>
      单个插槽和具名插槽中插槽上不绑定数据，所以父组件提供的模板既要包括样式又要包括数据，而作用域插槽是子组件提供数据，父组件只需要提供一套样式
    </p>
    <SlotChildDemo3>
      <template v-slot="slotChild3">
        {{ slotChild3.user.age }}
      </template>
    </SlotChildDemo3>
    <h1>vue - 兄弟之间传值</h1>
    <h2>组件A</h2>
    <hr>
    <Plana></Plana>
    <h2>组件B</h2>
    <hr>
    <Planb></Planb>
  </div>
</template>

<script>
import SlotChildDemo from "./childComponents/SlotChildDemo";
import SlotChildDemo2 from "./childComponents/SlotChildDemo2";
import SlotChildDemo3 from "./childComponents/SlotChildDemo3";
import Plana from "./childComponents/PlanA";
import Planb from "./childComponents/PlanB";
export default {
  components: {
    SlotChildDemo,
    SlotChildDemo2,
    SlotChildDemo3,
    Plana,
    Planb
  },
  created() {
    const spacing = "20px";
    const styles = `padding: ${spacing}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`;
    console.log("%c菜菜你真厉害", styles);
  },
};
</script>

<style scoped></style>
