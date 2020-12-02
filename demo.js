let data = [
  {
    cpuMode: "idle",
    cpuInstance: "node01",
    values: [
      ["1606731840", "38127.47"],
      ["1606732840", "38137.47"],
    ],
  },
  {
    cpuMode: "iowait",
    cpuInstance: "node01",
    values: [
      ["1606731840", "0.37"],
      ["1606732840", "0.30"],
    ],
  },
];

const newData = [];

data.map((item) => {
  item.values.map((val) => {
    newData.push({
      cpuMode: item.cpuMode,
      cpuInstance: item.cpuInstance,
      dtime: val[0],
      value: Number(val[1]),
    });
  });
});

console.log(newData);

// let newdata = [
//     {cpuMode:"idle",cpuInstance: 'node01',dtime:'1606731840',value:'38127.47'},
//     {cpuMode:"idle",cpuInstance: 'node01',dtime:'1606732840',value:'38137.47'},
//     {cpuMode:"iowait",cpuInstance: 'node01',dtime:'1606731840',value:'0.37'},
//     {cpuMode:"iowait",cpuInstance: 'node01',dtime:'1606732840',value:'0.30'},
// ]

let arr1 = [
  {
    name: "小明",
  },
];
let arr2 = [
    {
        age:11
    },
    {
        age:12
    }
]
const obj = arr1.map((item) => {
    return {...item,arr2};
});

const obj2 = arr1.concat(arr2)
console.log(obj);
console.log(obj2);