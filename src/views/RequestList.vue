<template>

  <div class="content-block">
  <div class="row">
    <h1 class="title">All requests</h1>
  </div>
  <hr>

    <div class="filters row">
      <div class="form-group col-sm-3">
        <label class="filters" for="search-element">Filters :</label>
      </div>
        <div class="form-group col-sm-3">
        <input v-model="searchKey" class="form-control" required/>
      </div>
        <div class="form-group col-sm-3">
         <select class="form-control"  v-model="selectedBrand">
           <option value="">All brands</option>
         <option v-for="(brand) in brandList" 
         :key="brand.brandId" 
         :value="brand.brandId">
         {{brand.name}}
         </option>
         </select>
      </div>
    </div>
  <hr>
  <div class="row">
    <table class="table table-hover table-primary">
      <thead>
      <tr>
        <th>Status</th>
        <th>Name</th>
        <th>Type</th>
        <th>Brand</th>
        <th >Submission</th>
        <th class="col-sm-2" ></th>
      </tr>
      </thead>
      <tbody>
        <Request v-for="request in filteredRequestList" 
        :key="request.requestId"
        :requestStatus="request.requestStatus.name"
        :campaignName="request.campaignName"
        :type="request.advice"
        :brand="request.brand.name"
        :submissionDate="request.submittedDate"
        :id="request.requestId"/>
      </tbody>
    </table>

</div>
  </div>
</template>
<script lang="ts">
import store from "../store";
import { GET_REQUEST_LIST } from "../store/actions.type";
import Request from "../components/Request";
import mixin from "../mixin";

export default {
  name: "RequestList",
  components:{Request},
  mixins:[mixin],
  computed:{
     filteredRequestList() {
        return this.$store.state.Request.requestList && this.$store.state.Request.requestList.filter((request) => {
         if(this.selectedBrand){
           return this.selectedBrand === request.brand.brandId && 
           request.campaignName.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
         }
         return request.campaignName.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 
  
        })
     }
  },
  data() {
      return {
        searchKey: ''
        }
    }, 
  mounted(){
    if(this.$store.state.Request.requestList.length === 0){
       store.dispatch(GET_REQUEST_LIST)
    }    
  }
}
</script>
<style scoped>
.row {
  display: block;
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: 12px;
  margin-right: 12px;
}
 .title {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    
    font-size: 3rem;
  }
  hr {
    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
}
  .filters.row{
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size: 1.8rem;
  }
</style>