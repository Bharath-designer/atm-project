"use strict";(self["webpackChunkatm_vue"]=self["webpackChunkatm_vue"]||[]).push([[198],{5198:function(e,a,o){o.r(a),o.d(a,{default:function(){return b}});var t=o(6768),c=o(4232),r=o(8298),n=o(9669);const s={class:"home-wrapper"},i={class:"actions-container"},u={class:"card-info"},d={key:0,class:"back-btn-container"},l={class:"card-details"};function k(e,a,o,k,m,v){const h=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",s,[(0,t.Lk)("div",i,[(0,t.bF)(h)]),(0,t.Lk)("div",u,[v.showBack?((0,t.uX)(),(0,t.CE)("div",d,[(0,t.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>v.goBack&&v.goBack(...e)),class:"back-button"},[(0,t.bF)(n.w,{icon:"mdi mdi-arrow-left"})])])):(0,t.Q3)("",!0),(0,t.Lk)("div",l,[(0,t.Lk)("p",null,"Card No: "+(0,c.v_)(m.cardNo),1),(0,t.bF)(r.D,{color:"error",onClick:v.cancel},{default:(0,t.k6)((()=>[(0,t.eW)("Cancel")])),_:1},8,["onClick"])])])])}var m={name:"Home",data(){return{cardNo:""}},computed:{showBack(){return"Options"!==this.$route.name}},beforeMount(){this.cardNo=sessionStorage.getItem("card"),this.cardNo||this.cancel()},methods:{cancel(){sessionStorage.removeItem("token"),sessionStorage.removeItem("card"),this.$router.replace({name:"Auth"})},goBack(){this.$router.go(-1)}}},v=o(1241);const h=(0,v.A)(m,[["render",k],["__scopeId","data-v-130c8736"]]);var b=h}}]);
//# sourceMappingURL=198.31449b46.js.map