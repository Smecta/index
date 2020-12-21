<script>
import BaseDialog from './BaseDialog'
export default {
    extends:BaseDialog,
    data(){
        return{
            title:'团队共享',
            labelName:'共享尽调人',
            personAll:[
                {id:72,real_name:'meitian'},
                {id:13,real_name:'hai'},
                {id:14,real_name:'bu'},
                {id:18,real_name:'liwo'},
                {id:12,real_name:'taoyanni'}
            ],
            personConfirm:[
                {id:1,real_name:'chenghao'},
                {id:2,real_name:'shi'},
                {id:5,real_name:'a'},
                {id:9,real_name:'dapianzi'}
            ],
        }
    },
    created(){
        this.getData()
    },
    methods:{
        showLabel(item){
            return item.real_name
        },
        getData(){
            //获取接口数据(此处为data中的固定数据) 并相应地给其增加是否可删除字段,如果后端没有给相应字段但有需求
            this.personConfirm = this.personConfirm.map(i => {
                return {
                    closeable:false,
                    ...i
                }
            })
            const ids = this.personConfirm.map(i => i.id)
            const data = this.personAll.map(i => {
                return {
                    closeable:true,
                    ...i
                }
            })
            //select选择框中数据过滤掉用户名为空、和personConfirm中数据重复部分
            this.personAll = data.filter(d => d.real_name !=='' && !ids.includes(d.id))
        }
    }
}
</script>
