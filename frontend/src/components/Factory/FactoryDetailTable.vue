<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-card class="elevation-1" style="background-color: #efedf0;">
        <v-card-title :style="{color: $vuetify.theme.themes.light.colors.primary }">
          <span class="headline">Factory Details</span>
        </v-card-title>
        <v-table class="elevation-1" color="primary lighten-4" height="400px" style="background-color: #efedf0;">
          <thead style="position: sticky; top: 0; background: white; z-index:1">
            <tr>
              <th class="text-left head-column border">
                Base Unit
              </th>
              <th class="text-left head-column border">
                Date Range
              </th>
              <th class="text-left head-column border">
                Usage
              </th>
              <th class="text-left head-column border">
                Usage Free
              </th>
              <th class="text-left head-column border">
                Discounted Price
              </th>
              <th class="text-left head-column border">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in factoryDetail" :key="item.id">
              <td class="border">{{ item.baseUnit }}</td>
              <td class="border">{{ item.dateRange }}</td>
              <td class="border">{{ item.usage }}</td>
              <td class="border">{{ item.usageFee }}</td>
              <td class="border">{{ item.discountedPrice }}</td>
              <td>
                <v-btn class="align-center" text>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </td>
              
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-responsive>
  </v-container>
</template>



<script>
import { useFactoryDetailStore } from '@/store/FactoryDetail.js';

export default {
  props: ['factoryDetail'],
  setup() {
    const factoryDetailStore = useFactoryDetailStore()

    return { factoryDetailStore }
  }
}
</script>