import { Injectable } from '@nestjs/common';
import pool from './database/postgresql-db.config';

@Injectable()
export class AppService {
 // getHello(): string {
   // return 'Hello World!';
// }

  async getData(): Promise<Array<String>>{
    const client = await pool.connect();

    try {
      /*
      const result6 = await client.query(`CREATE or replace TABLE factorydetails (
        id SERIAL PRIMARY KEY,
        factoryId INTEGER NOT NULL,
        department VARCHAR(255),
        startDate DATE,
        endDate DATE,
        usage INTEGER,
        usageFee INTEGER,
        discountedPrice BOOLEAN
    )`);
    */
   /*
      const result = await client.query(`INSERT INTO factorydetails (factoryId, department, startDate, endDate, usage, usageFee, discountedPrice)
      VALUES (1, 'Production', '2023-01-01', '2023-12-31', 100, 500, true),
      (1, 'Production 2', '2023-01-01', '2023-12-31', 100, 500, true),
      (3, 'Production 3', '2023-01-01', '2023-12-31', 300, 300, false),
      (4, 'Production 4', '2023-01-01', '2023-12-31', 100, 400, true),
      (5, 'Production 5', '2023-01-01', '2023-12-31', 100, 500, false),
      (1, 'Production 6', '2023-01-01', '2023-12-31', 500, 500, true),
      (2, 'Production 7', '2023-01-01', '2023-12-31', 100, 600, false),
      (3, 'Production 8', '2023-01-01', '2023-12-31', 100, 700, true),
      (4, 'Production 9', '2023-01-01', '2023-12-31', 700, 800, false),
      (5, 'Production 10', '2023-01-01', '2023-12-31', 100, 400, true),
      (1, 'Production 11', '2023-01-01', '2023-12-31', 100, 300, false),
      (2, 'Production 12', '2023-01-01', '2023-12-31', 500, 200, false),
      (3, 'Production 13', '2023-01-01', '2023-12-31', 100, 100, true),
      (4, 'Production 14', '2023-01-01', '2023-12-31', 600, 400, true)


      
      
    
    `);
    */
    const result = await client.query(`select * from factorydetails`)
      return result.rows;
    } finally {
      client.release();
    }
  }
}
