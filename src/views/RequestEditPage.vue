<template>

  <div class="content-block">
  <div class="row">
    <h1 class="title">Edit request</h1>
  </div>
  <hr>
    <form v-on:submit="updateRequest(request)">
     <div class="block row">
      <div class="form-group col-sm-3">
        <label>Brand :</label>
      </div>
      <div class="form-group col-sm-3">
         <select class="form-control" v-model="request.brand" >
         <option v-for="(brand) in brandList" 
         :key="brand.brandId" 
         :value="brand"
         >
         {{brand.name}}
         </option>
         </select>
      </div>
     </div>
       <div class="block row">
        <div class="form-group col-sm-3">
        <label>Compaign name :</label>
      </div>
      <div class="form-group col-sm-3">
            <input class="form-control"  type="text" v-model="request.campaignName" required>
        </div>
       </div>
       <div class="block row">
        
        <label>Media:</label>
       </div>
       
        <div class="block row" >
      <div class="col-sm-3">
          <div class="form row">
           <input type="checkbox" :value="12" :checked="checked(12)" 
           @click="updateMedia(request,12,'Collaboration','COLLABORATION')">
           <label>Collaboration</label>
          </div>
          <div class="form row">
            <input type="checkbox" :value="2" :checked="checked(2)"
            @click="updateMedia(request,2,'New product/Innovation','NEW_PRODUCT_INNOVATION')">
           <label>New product/Innovation</label>
          </div>
          <div class="form row">
            <input type="checkbox" :value="8" :checked="checked(8)"
            @click="updateMedia(request,8,'Print','PRINT')">
           <label>Print</label>
          </div>
          <div class="form row" >
            <input type="checkbox" :value="7" :checked="checked(7)"
             @click="updateMedia(request,7,'Radio','RADIO')">
           <label>Radio</label>
          </div>
          <div class="form row">
            <input type="checkbox" :value="5" :checked="checked(5)"
             @click="updateMedia(request,5,'Sponsorship','SPONSORSHIP')">
           <label>Sponsorship</label>
          </div>
          <div class="form row">
            <input type="checkbox" :value="4" :checked="checked(4)"
            @click="updateMedia(request,4,'Website','WEBSITE')">
           <label>Website</label>
          </div>
        </div>
        <div class="col-sm-3">
        <div class="form row">
          <input type="checkbox" :value="1" :checked="checked(1)"
          @click="updateMedia(request,1,'Labeling/Packaging','LABELING_PACKAGING')">
          <label>Labelling/ Packaging</label>
        </div>
        <div class="form row">
          <input type="checkbox" :value="3" :checked="checked(3)"
           @click="updateMedia(request,3,'OOH','OOH')">
          <label>OOH</label>
        </div>
        <div class="form row">
          <input type="checkbox" :value="6" :checked="checked(6)"
           @click="updateMedia(request,6,'Promotions','PROMOTIONS')">
           <label>Promotions</label>
        </div>
        <div class="form row">
           <input type="checkbox" :value="9" :checked="checked(9)"
           @click="updateMedia(request,9,'Social Media','SOCIAL_MEDIA')">
           <label>Social Media</label>
        </div>
        <div class="form row">
           <input type="checkbox" :value="10" :checked="checked(10)"
           @click="updateMedia(request,10,'TVC/Online videos','TVC_ONLINE_VIDEOS')">
           <label>TVC/Online videos</label>
        </div>
        <div class="form row">
           <input type="checkbox" :value="11" :checked="checked(11)"
            @click="updateMedia(request,11,'Others','OTHERS')">
           <label >Others</label>
        </div>
        </div>  
       </div>
        <div class="block row">
        <div class="form-group col-sm-3">
        <label>Deadline for decision :</label>
      </div>
      <div class="form-group col-sm-3">
            <Datepicker class="form-control" v-model="request.decisionDeadline"/>
        </div>
       </div>
    <button class="btn btn-primary">Save</button>

    <a class="btn btn-default">
      <router-link to="/">Cancel</router-link>
    </a>
    </form>
  </div>

</template>
<script lang="ts">
import { mapGetters } from "vuex";
import store from "../store";
import {GET_REQUEST } from "../store/actions.type";
import {EDIT_REQUEST} from "../store/mutations.type";
import mixin from "../mixin";
import Datepicker from 'vuejs-datepicker';

export default {
  name: "RequestEditPage",
  components:{Datepicker},
  mixins:[mixin],
  computed:{
    ...mapGetters({request:'request'}),
  },
  data() {
      return {
        media :[]
        }
    }, 
  mounted(){
     store.dispatch(GET_REQUEST,this.$route.params.id)

  },
  methods:{
    updateRequest(request){
        let req = request;
        const payload = {
          brand: req.brand,
          campaignName: req.campaignName,
          decisionDeadline: req.decisionDeadline,
          media: req.media
        };
        store.commit(EDIT_REQUEST, payload);
        this.$router.push('/');
    }, 
    updateMedia(req, mediaId, mediaValue, mediaName){
      let request = req
      if(!this.checked(mediaId)){
             request.media.push({
                mediaId: mediaId,
                name: mediaValue,
                value: mediaName
        }) 
        } else {
         request.media.splice( request.media.findIndex(media => media.mediaId === mediaId) ,1)
        }    
        this.media= request.media
    }, 
    checked(value){
      let checked = this.request.media && this.request.media.filter((media) => {
           return value === media.mediaId 
        })
        if (checked && checked.length > 0){
          return true;
        }
        return false;
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
  .block.row{
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size: 1.5rem;
  }
</style>