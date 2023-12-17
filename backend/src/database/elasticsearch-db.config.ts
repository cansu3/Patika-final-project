import { Client } from '@elastic/elasticsearch'

const elasticClient = new Client({
  cloud: {id:'greendash:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRjMDc1MTdkNGUxMTQ0MTE3ODgyOGQ3NDdkZDY3ZDg0MiRhYzAyOTRlNjljZTU0ZmNjYmEwNTcwMGRiMzVmODgyNg=='}, // Elasticsearch endpoint
  auth: {
    username:"elastic",
    password:"LTcgwBYoX1vmfLDyTMTv3oyY",
   
}
});

export default elasticClient;