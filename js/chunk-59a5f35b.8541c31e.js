(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59a5f35b"],{"1db7":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/login/user"}}},[e._v("用户首页")]),s("el-breadcrumb-item",[e._v("权限管理")]),s("el-breadcrumb-item",[e._v("权限列表")])],1),s("el-card",{attrs:{shadow:"always"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加角色")]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rolesList}},[s("el-table-column",{attrs:{type:"expand",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(o,a){return s("el-row",{key:o.id,class:["bdbottom",0===a?"bdtop":"","con"]},[s("el-col",{attrs:{span:5}},[s("el-tag",{attrs:{size:"medium",closable:""}},[e._v(e._s(o.authName))]),s("i",{staticClass:"el-icon-caret-right"})],1),s("el-col",{attrs:{span:19}},e._l(o.children,(function(o,a){return s("el-row",{key:o.id,class:[0===a?"":"bdtop","con"]},[s("el-col",{attrs:{span:6}},[s("el-tag",{attrs:{size:"medium",type:"success",closable:""}},[e._v(e._s(o.authName))]),s("i",{staticClass:"el-icon-caret-right"})],1),s("el-col",{attrs:{span:13}},e._l(o.children,(function(o,a){return s("el-tag",{key:o.id,attrs:{size:"medium",type:"warning",closable:""},on:{close:function(s){return e.remove(t.row,o.id)}}},[e._v(e._s(o.authName))])})),1)],1)})),1)],1)}))}}])}),s("el-table-column",{attrs:{type:"index",label:"#",width:"80"}}),s("el-table-column",{attrs:{prop:"roleName",label:"角色名称",width:"150"}}),s("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述",width:"300"}}),s("el-table-column",{attrs:{prop:"email",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(s){return e.changeroles(t.row)}}},[e._v("编辑")]),s("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(s){return e.del(t.row.id)}}},[e._v("删除")]),s("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(s){return e.showSetRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),s("el-dialog",{attrs:{title:"添加角色",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{attrs:{model:e.addRolesList,rules:e.loginRules}},[s("el-form-item",{attrs:{label:"姓名名称","label-width":"80px",prop:"roleName"}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.addRolesList.roleName,callback:function(t){e.$set(e.addRolesList,"roleName",t)},expression:"addRolesList.roleName"}})],1),s("el-form-item",{attrs:{label:"角色描述","label-width":"80px",prop:"roleDesc"}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.addRolesList.roleDesc,callback:function(t){e.$set(e.addRolesList,"roleDesc",t)},expression:"addRolesList.roleDesc"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.addrolesList}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"编辑用户",visible:e.show},on:{"update:visible":function(t){e.show=t}}},[s("el-form",{attrs:{model:e.changeRoles,rules:e.loginRules}},[s("el-form-item",{attrs:{label:"角色名称","label-width":"80px",prop:"roleName"}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.changeRoles.roleName,callback:function(t){e.$set(e.changeRoles,"roleName",t)},expression:"changeRoles.roleName"}})],1),s("el-form-item",{attrs:{label:"角色职位","label-width":"80px",prop:"roleDesc"}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.changeRoles.roleDesc,callback:function(t){e.$set(e.changeRoles,"roleDesc",t)},expression:"changeRoles.roleDesc"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.changeRole}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"分配权限",visible:e.showSetRightDialogs,width:"50%"},on:{"update:visible":function(t){e.showSetRightDialogs=t}}},[s("el-tree",{ref:"treeRef",attrs:{data:e.setRightList,"show-checkbox":"","node-key":"id","default-expand-all":!0,"default-checked-keys":e.defKeys,props:e.treeProps}}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.showSetRightDialogs=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.allRolesList}},[e._v("确 定")])],1)],1)],1)},a=[],l={data(){return{rolesList:[],addRolesList:{roleName:"",roleDesc:""},dialogFormVisible:!1,loginRules:{roleName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 10 个字符",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入职位",trigger:"blur"},{min:2,max:8,message:"长度在 2 到 8 个字符",trigger:"blur"}]},changeRoles:{roleName:"",roleDesc:""},show:!1,cid:0,showSetRightDialogs:!1,setRightList:[],treeProps:{children:"children",label:"authName"},defKeys:[],rolesID:[]}},created(){},mounted(){this.getRolesList()},methods:{async getRolesList(){const{data:e}=await this.$axios.get("https://www.liulongbin.top:8888/api/private/v1/roles");console.log(e),200==e.meta.status?(this.$message.success(e.meta.msg),this.rolesList=e.data):this.$message.error(e.meta.msg)},async addrolesList(){const{data:e}=await this.$axios.post("https://www.liulongbin.top:8888/api/private/v1/roles",this.addRolesList);console.log(e),201==e.meta.status?(this.$message.success(e.meta.msg),this.dialogFormVisible=!1,this.getRolesList()):this.$message.error(e.meta.msg)},del(e){console.log(e),this.$confirm("你是不是真的要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$axios.delete("https://www.liulongbin.top:8888/api/private/v1/roles/"+e).then(e=>{console.log(e),200==e.data.meta.status?(this.$message.success(e.data.meta.msg),this.getRolesList()):this.$message.error(e.data.meta.msg)})})},changeroles(e){console.log(e),this.changeRoles=e,this.cid=e.id,this.show=!0},async changeRole(){const{data:e}=await this.$axios.put("https://www.liulongbin.top:8888/api/private/v1/roles/"+this.cid,this.changeRoles);console.log(e),200==e.meta.status?(this.$message.success(e.meta.msg),this.getRolesList(),this.show=!1):this.$message.error(e.meta.msg)},remove(e,t){console.log(e,t),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$axios.delete(`https://www.liulongbin.top:8888/api/private/v1/roles/${e.id}/rights/${t}`).then(t=>{console.log(t),200==t.data.meta.status?(this.$message.success(t.data.meta.msg),e.children=t.data.data):this.$message.error(t.data.meta.msg)})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},async showSetRightDialog(e){this.rolesID=e.id;const{data:t}=await this.$axios.get("https://www.liulongbin.top:8888/api/private/v1/rights/tree");200==t.meta.status?(this.$message.success(t.meta.msg),this.setRightList=t.data,this.getdefKeys(e,this.defKeys),this.showSetRightDialogs=!0):this.$message.error(t.meta.msg),console.log(e,this.defKeys)},getdefKeys(e,t){if(!e.children)return t.push(e.id);e.children.forEach(e=>this.getdefKeys(e,t))},getRoles(){this.defKeys=[]},async allRolesList(){const e=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()];console.log(e);const t=e.join(","),{data:s}=await this.$axios.post(`https://www.liulongbin.top:8888/api/private/v1/roles/${this.rolesID}/rights`,{rids:t});200==s.meta.status?(this.$message.success(s.meta.msg),this.getRolesList(),this.showSetRightDialogs=!1):this.$message.error(s.meta.msg)}},computed:{},components:{}},i=l,r=(s("ed27"),s("2877")),n=Object(r["a"])(i,o,a,!1,null,"50298d44",null);t["default"]=n.exports},"8ce8":function(e,t,s){},ed27:function(e,t,s){"use strict";s("8ce8")}}]);