<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-table height="300px">
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
          <tr
            v-for="item in factory"
            :key="item.id"
          >
            <v-btn class="align-center" text >
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <td>{{ item.name }}</td>
            <td>{{ item.startDate }}</td>
            <td>{{ item.endDate }}</td>
            <td>{{ item.numberOfEmployee }}</td>
            <td>{{ item.isFreeMember }}</td>
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
import { useFactoryStore } from '@/store/Factory.js';

export default {
    props: ['factory'],
    setup(){
        const factoryStore = useFactoryStore()

        return { factoryStore }
    }
}
</script>