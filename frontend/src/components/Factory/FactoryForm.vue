<template >
  <v-row justify="left">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Factory</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-text-field v-model="factoryInfo.name" label="Factory name" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="factoryInfo.numberOfEmployee" type="number" label="Number of Employees" required ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select v-model="factoryInfo.isFree" :items=itemsSelect item-title="title" item-value="valu" label="Free Member" required></v-select>
              </v-col>
              <v-col cols="12" sm="6" class="text-center" >
                <label for="startdatepicker">Start Date</label>
                <v-spacer></v-spacer>
                <VueFlatpickr v-model="factoryInfo.startDate" id="startdatepicker" class="form-control" 
                :config="flatpickrOptions"  placeholder="Select date" style="text-align: center;"/>
                </v-col>
                <v-col cols="12" sm="6" class="text-center">
                  <label for="enddatepicker">End Date</label>
                <v-spacer></v-spacer>
                <VueFlatpickr v-model="factoryInfo.endDate" id="enddatepicker" class="form-control" 
                :config="flatpickrOptions"  placeholder="Select date" style="text-align: center;"/>
                </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn variant="text" @click="updateFactory(factoryInfo.id,factoryInfo)">
           Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { useFactoryStore } from '@/store/Factory.js';
const factoryStore=useFactoryStore();

import VueFlatpickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css"; 
export default {
  props: ['visible','factoryInfo'],
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  components: {
    VueFlatpickr
  },
  data: () => ({
    itemsSelect:[{
      value:true,
      title:'True'
    },
    {
      value:false,
      title:'False'
    }],
    dialog: false,
    startselectedDate: null,
    endselectedDate: null,
    flatpickrOptions: {
        dateFormat: "Y-m-d",
        // Other Flatpickr options...
      },
  }),
  methods: {
    updateFactory(id,factory) {
     factoryStore.updateFactory(id,factory);
    }

  }
}
</script>