<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-card class="elevation-1" style="background-color: #efedf0;">
        <v-card-title :style="{ color: $vuetify.theme.themes.light.colors.primary }">
          <span class="headline">Factories</span>
        </v-card-title>
        <v-table height="300px" style="background-color: #efedf0;">
          <thead>
            <tr>
              <th class="text-left">
                Details
              </th>
              <th class="text-left">
                Factory Name
              </th>
              <th class="text-left">
                Start Date
              </th>
              <th class="text-left">
                End Date
              </th>
              <th class="text-left">
                Number of Employee
              </th>
              <th class="text-left">
                Free Member
              </th>
              <th class="text-left">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in factory" :key="item.id">
              <td>
                <v-btn class="align-center" text href="/factory-details">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </td>

              <td>{{ item.name }}</td>
              <td>{{ item.startDate }}</td>
              <td>{{ item.endDate }}</td>
              <td>{{ item.numberOfEmployee }}</td>
              <td>{{ item.isFreeMember }}</td>
              <td> 
                <!--<v-btn class="align-center" text @click.stop="showFactoryForm=true">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>-->
                <FactoryForm :visible="showFactoryForm" @close="showFactoryForm=false" />
              </td>
              
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import { useFactoryStore } from '@/store/Factory.js';
import FactoryForm from './FactoryForm.vue'

export default {
  props: ['factory'],
  setup() {
    const factoryStore = useFactoryStore()

    return { factoryStore }
  },
  data () {
    return {
      showFactoryForm: false
    }
  },
  components: {
    FactoryForm
  }
}

</script>
