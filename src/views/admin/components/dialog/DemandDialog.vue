<script>
import BaseDialog from './BaseDialog'
export default {
    extends:BaseDialog,
    data(){
        return{
            title:'分配需求',
            labelName:'需求人',
            personAll:[
                {id:7,user_name:'caicai'},
                {id:13,user_name:'shi'},
                {id:4,user_name:'zhu'},
                {id:8,user_name:'huairen'},
                {id:2,user_name:'chch'}
            ],
            personConfirm:[
                {id:1,user_name:'菜菜'},
                {id:2,user_name:'chch'}
            ],
        }
    },
    created(){
        this.getData()
    },
    methods:{
        showLabel(item){
            return item.user_name
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
            this.personAll = data.filter(d => d.user_name !=='' && !ids.includes(d.id))
        }
    }
}
</script>
