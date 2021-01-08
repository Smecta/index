<template>
  <div class="axios-style">
    <h1>轮询方式</h1>
    <div class="history">
      <!-- 组件部分 -->
      <Scroll :scrollList="scrollList"></Scroll>
    </div>
    <el-button @click="getStatus">发请求拿数据</el-button>
    <p>
      随机一句：<span>{{ status }}</span>
    </p>
  </div>
</template>
<script>
import axios from "axios";
import Scroll from "@/views/admin/components/Scroll.vue";
export default {
  data() {
    return {
      status: "",
      scrollList: [],
    };
  },
  components: {
    Scroll,
  },
  created() {
    this.axiosDemo();
    this.componentDidMount();
    this.componentDidMount1();
    this.axiosMore()
  },
  mounted() {
    this.getStatus();
    this.timer = window.setInterval(() => {
      setTimeout(() => {
        this.getStatus();
      }, 0);
    }, 3000);
  },
  computed: {
    // 计算属性
    // statusData() { return this.status }
  },
  watch: {
    // statusData: function (newval) {
    //     // 当返回的新值为创建中的时候,保持3秒轮询
    //     if (newval == 'creating') {
    //         var timer = setInterval(() => {
    //             setTimeout(this.getStatus, 0)
    //         }, 3000)
    //     }
    //     // 当返回的新值为成功的时候,关闭定时器,结束轮询
    //     if (newval == 'success') {
    //         clearInterval(timer)
    //     }
    //     // 当页面关闭的时候,结束轮询,否则就会一直发请求,
    //     //使用$once(eventName, eventHandler)一次性监听事件
    //     this.$once('hook:boforeDestory', () => {
    //         clearInterval(timer)
    //     })
    // }
  },
  methods: {
    getStatus() {
      this.$http
        .get("https://api.66mz8.com/api/sweet.php?format=json")
        .then((res) => {
          if (res.status == 200) this.$message.success("请求成功");
          // console.log(res);
          this.status = res.data.sweet;
          let arr = [];
          arr.push(res.data.sweet);
          // // this.scrollList.map(v={
          // //     v.title: this.status
          // // })
        });
    },
    axiosDemo() {
      // 方式一：
      //   axios({
      //     method: "get",
      //     url: "https:httpbin.org/get",
      //     params: {
      //       name: "ch",
      //       age: 18,
      //     },
      //   })
      //     .then((res) => {
      //       console.log("请求结果:", res);
      //     })
      //     .catch((err) => {
      //       console.log("错误信息:", err);
      //     });
      //   方式二：
      axios
        .get("https://httpbin.org/get", {
          params: {
            name: "kobe",
            age: 40,
          },
        })
        .then((res) => {
          console.log("请求结果:", res);
        })
        .catch((err) => {
          console.log("错误信息:", err);
        });
    },
    async componentDidMount() {
      const result = await axios.get("https://httpbin.org/get", {
        params: {
          name: "kobe2",
          age: 40,
        },
      });
      console.log(result);
    },
    async componentDidMount1() {
      try {
        const result = await axios.get("https://httpbin.org/get", {
          params: {
            name: "kobe3",
            age: 40,
          },
        });
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    },
    axiosMore() {
      const request1 = axios.get("https://httpbin.org/get", {
        params: { name: "多个请求1-get", age: 18 },
      });
      const request2 = axios.post("https://httpbin.org/post", {
        name: "多个请求2-post",
        age: 40,
      });
      axios
        .all([request1, request2])
        .then(([res1, res2]) => {
          console.log(res1, res2);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  destroyed() {
    window.clearInterval(this.timer);
  },
};
</script>

<style>
.axios-style {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.axios-style > * {
  padding: 20px 20px;
}

p {
  font-size: 20px;
  color: slateblue;
}
p span {
  color: tomato;
  font-weight: 700;
}
.history{
  width: 90%;
}
</style>
