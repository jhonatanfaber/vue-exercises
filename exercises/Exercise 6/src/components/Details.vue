<template>
    <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <server 
                        class="list-group-item"
                        v-for="server in servers" :key="server.id"
                        :server="server"
                        @showInformation="showMoreInformation"
                    />
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p> {{message}} </p>
            </div>
        </div>
    
</template>
 <script>
import Server from "./Server.vue";

export default {
  data() {
    return {
      servers: [
        {
          number: 1,
          information: "some info from server 1"
        },
        {
          number: 2,
          information: "some info from server 2"
        },
        {
          number: 3,
          information: "some info from server 3"
        },
        {
          number: 4,
          information: "some info from server 4"
        },
        {
          number: 5,
          information: "some info from server 5"
        }
      ],
      message : "Server Details are currently not updated"
    };
  },
  components: {
    Server
  },
  methods : {
      showMoreInformation(information){
          this.message = information
      }
  }
};
</script>
 