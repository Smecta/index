<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
        <div class="select-box">
            <div class="label">{{labelName}}</div>
            <el-select
                multiple
                v-model="personSelect"
                class="select"
                collapse-tags
                placeholder="请选择"
            >
                <el-option 
                    v-for="item in personAll"
                    :key="item.id"
                    :value="stringObj(item)" 
                    :label="showLabel(item)"
                />
            </el-select>    
        </div>
        <div class="name-box">
            <div v-for="item in personConfirm" :key="item.id" class="item">{{showLabel(item)}}<i v-show="!!item.closeable" class="el-icon-close icon"/></div>
            <div v-for="(item,index) in parseObj" :key="item.id" class="item">{{showLabel(item)}}<i v-show="!!item.closeable" class="el-icon-close icon" @click="deletePerson(index)"/></div>
        </div>
        <div class="btn-box">
            <el-button class="btn" @click="dialogVisible=false">取消</el-button>
            <el-button class="btn" @click="submit">确定</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    props:{
        showDialog:{
            type:Boolean,
            default:false
        }
    },
    watch:{
        personSelect(newValue){
            console.log(newValue);
        }
    },
    computed:{
        dialogVisible:{
            get(){
                return this.showDialog
            },
            set(val){
                this.$emit('update:showDialog',val)
                console.log(val);
            }
        },
        parseObj(){
            return this.personSelect.map(d=>JSON.parse(d))
        }
    },
    data(){
        return {
            title:'标题',
            labelName:'select菜菜名',
            personAll:[
                {id:4,name:'程浩',closeable:true},
                {id:5,name:'乘号',closeable:true},
                {id:6,name:'称号',closeable:true},
                {id:7,name:'程颢',closeable:true},
            ],
            personConfirm:[
                {id:1,name:'程程',closeable:false},
                {id:2,name:'chch',closeable:false},
                {id:3,name:'菜菜',closeable:false},
            ],
            personSelect:[]
        }
    },
    methods:{
        showLabel(item){
            return item.name
        },
        stringObj(item){
            return JSON.stringify(item)
        },
        deletePerson(index){
            this.personSelect.splice(index,1)
        },
        submit(){
            const confirmIds = this.personConfirm.map(item=>item.id)
            const selectIds = this.parseObj.map(item=>item.id)
            const ids = [...confirmIds,...selectIds]
            console.log(ids);
            this.dialogVisible=false
        }
    }
}
</script>
<style lang="scss" scoped>
.select-box{
    display: flex;
    height: 40px;
    margin-bottom: 20px;
    .label{
        height: 40px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #515151;
        background: #e6e6e6;
        flex: 1;
    }
    .select{
        flex: 1;
        align-items: center;
        display: flex;
    }
}
.name-box{
    height: 150px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .item{
        min-width: 50px;
        height: 30px;
        padding: 0 8px;
        border-radius: 4px;
        color: #1296db;
        border: 1px solid #1296db;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px 0px 0;
        .icon {
            margin-left: 5px;
            cursor: pointer;
            &:hover{
            color: red;
            font-weight: bold;;
        }
      }
    }
}
.btn-box{
    display: flex;
    justify-content: center;
}
</style>