<template>

       <tr >
           
        <td> <img class="image" :src="img"/></td>
        <td>{{campaignName}}</td>
        <td v-if="type"><span class="badge advice">advice</span></td>
         <td v-else><span class="badge request">Request</span></td>
        <td>{{brand}}</td>
        <td>{{date}}</td>
        <td class="col-sm-2">
        <router-link :to="/Request-Edit/+ id">
         <img class="image" src="src/assets/img/enter.png"/></router-link>
        </td>
        </tr>

</template>

<script lang="ts">

export default {
 name: "Request",
 props : ["requestStatus","campaignName","type","brand","submissionDate","id"],
 data (){
     return{
         months: ["January", "February"]
     }
 },
 computed:{
     date () {
         if(this.submissionDate){
              let date = new Date(this.submissionDate).toJSON().slice(0,10).replace(/-/g,'/')
              return date;
         }
        return ""
       
     },
     img(){
         switch(this.requestStatus){
             case 'SUBMITTED': return "src/assets/img/submit.png"
             case 'DRAFT': return "src/assets/img/draft.png"
             case 'TO_REVIEW': return "src/assets/img/review.png"
             case 'VALIDATED': return "src/assets/img/valid.png"
             case 'REJECTED' : return "src/assets/img/reject.png"
             case 'TO_MODIFY':return "src/assets/img/edit.png"
         }
     }
 }
 
  }
  
</script>
<style scoped>
.advice {
    background-color: rgb(128, 47, 209);
}
.request {
    background-color: rgb(42, 149, 192);
}
.image{
    max-width: 12%;
}
</style>
