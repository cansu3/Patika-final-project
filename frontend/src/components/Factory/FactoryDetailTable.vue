<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-table class="elevation-1" color="primary lighten-4" height="400px">
        <thead>
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
          <tr
            v-for="item in factoryDetail"
            :key="item.id"
          >
            <td class="border">{{ item.baseUnit }}</td>
            <td class="border">{{ item.dateRange }}</td>
            <td class="border">{{ item.usage }}</td>
            <td class="border">{{ item.usageFee }}</td>
            <td class="border">{{ item.discountedPrice }}</td>
            <v-btn class="align-center" text >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </tr>
        </tbody>
      </v-table>
    </v-responsive>
  </v-container>
</template>



<script>
import { useFactoryDetailStore } from '@/store/FactoryDetail.js';

export default {
  props: ['factoryDetail'],
  setup(){
      const factoryDetailStore = useFactoryDetailStore()

      return { factoryDetailStore }
  }
}
</script>