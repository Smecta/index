<template>
  <div>
    <h1 class="text-white text-center bg-dark fs-xl">websocket方式</h1>
    <button @click="initSocket">建立websocket连接</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      webSocket: null,
      url: "197.2.1.3:8088",
      types: "给后台参数",
    };
  },
  methods: {
    // 建立连接
    initSocket() {
      // 有参数的情况下：
      let url = `ws://${this.url}/${this.types}`;
      // 没有参数的情况:接口
      // let url1 = 'ws://localhost:9998'
      this.webSocket = new WebSocket(url);
      this.webSocket.onopen = this.webSocketOnOpen;
      this.webSocket.onclose = this.webSocketOnClose;
      this.webSocket.onmessage = this.webSocketOnMessage;
      this.webSocket.onerror = this.webSocketOnError;
    },
    // 建立连接成功后的状态
    webSocketOnOpen() {
      console.log("websocket连接成功");
    },
    // 获取到后台消息的事件，操作数据的代码在onmessage中书写
    webSocketOnMessage(res) {
      // res就是后台实时传过来的数据
      console.log(res);
      //给后台发送数据
      this.webSocket.send("发送数据");
    },
    // 关闭连接
    webSocketOnClose() {
      this.webSocket.close();
      console.log("websocket连接已关闭");
    },
    //连接失败的事件
    webSocketOnError(res) {
      console.log("websocket连接失败");
      // 打印失败的数据
      console.log(res);
    },
  },
  created() {
    // 页面打开就建立连接，根据业务需要
    this.initSocket();
  },
  destroyed() {
    // 页面销毁关闭连接
    this.webSocket.close();
  },
};
</script>
