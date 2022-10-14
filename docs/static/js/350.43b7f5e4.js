"use strict";(self["webpackChunkvue_system"]=self["webpackChunkvue_system"]||[]).push([[350],{8225:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"user"}},[t("el-descriptions",{staticClass:"settings",attrs:{title:"管理员信息设置",direction:"vertical",column:3,border:"",labelClassName:"label"}},[t("el-descriptions-item",{attrs:{label:"账号"}},[e._v(e._s(e.userInfo.username))]),t("el-descriptions-item",{attrs:{label:"手机号"}},[e._v(e._s(e.userInfo.phoneNumber))]),t("el-descriptions-item",{attrs:{label:"性别"}},[e._v(e._s(e.userInfo.sex))]),t("el-descriptions-item",{attrs:{label:"年龄"}},[e._v(e._s(e.userInfo.age))]),t("el-descriptions-item",{attrs:{label:"头像"}},[e._v(e._s(e.userInfo.avatar))]),t("el-descriptions-item",{attrs:{label:"地址",span:2}},[e._v(e._s(e.userInfo.address))]),t("el-descriptions-item",{attrs:{label:"备注"}},[t("el-tag",{attrs:{size:"small"}},[e._v("学校")])],1)],1),t("div",{staticClass:"buttons"},[t("el-button",{attrs:{type:"primary"},on:{click:e.modify}},[e._v("修改密码")]),t("el-button",{attrs:{type:"primary"}},[e._v("修改基本信息")])],1),t("el-dialog",{attrs:{title:"修改密码",visible:e.centerDialogVisible,width:"60%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"","label-width":"100px"}},[t("el-form-item",{attrs:{label:"旧密码",prop:"oldpwd"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.oldpwd,callback:function(t){e.$set(e.ruleForm,"oldpwd",e._n(t))},expression:"ruleForm.oldpwd"}})],1),t("el-form-item",{attrs:{label:"新密码",prop:"newpwd"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.newpwd,callback:function(t){e.$set(e.ruleForm,"newpwd",t)},expression:"ruleForm.newpwd"}})],1),t("el-form-item",{attrs:{label:"重复密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1)],1)},l=[],o=s(8499),i=s(3822),a={name:"User",data(){return{centerDialogVisible:!1,ruleForm:{oldpwd:"",checkPass:"",newpwd:""}}},methods:{submitForm(){if(!this.ruleForm.checkPass&&!this.ruleForm.newpwd&&!this.ruleForm.oldpwd)return o.Message.error("请完整输入");if(this.ruleForm.checkPass!=this.ruleForm.newpwd)return o.Message.error("两次输入的新密码不相同");{let e=this.userInfo.id,t=this.ruleForm.newpwd;this.$store.dispatch("modifyPwd",{id:e,newPwd:t}).then((e=>{e.success&&((0,o.Message)({type:"success",message:e.msg}),this.centerDialogVisible=!1)}))}},resetForm(){this.ruleForm={oldpwd:"",checkPass:"",newpwd:""}},modify(){this.resetForm(),this.centerDialogVisible=!0}},computed:{...(0,i.rn)({userInfo:e=>e.user.userInfo})}},n=a,u=s(1001),c=(0,u.Z)(n,r,l,!1,null,"7957d79c",null),m=c.exports}}]);