import { Injectable, NotFoundException } from '@nestjs/common';
import { IFactoryDetail } from './factory-details.model';
import { UpdateFactoryDetailDto } from './dto/update-factory-detail.dto';
import pool from '../database/postgresql-db.config';

@Injectable()
export class FactoryDetailsService {

  async getFactoryDetails(factoryId: string) {
    const client = await pool.connect();

    try {
      const result = await client.query(`select * from factorydetails where factoryid = `+factoryId);
      return result.rows;
    } finally {
      client.release();
    }
  }
  async getFactoryDetail(factoryId: string, id: string) {
    const client = await pool.connect();

    try {
      const result = await client.query(`select * from factorydetails where id = `+id +`and factoryid = `+ factoryId);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async updateFactoryDetail(factoryId: string, id: string, payload: UpdateFactoryDetailDto) {
    const client = await pool.connect();

    try {
        const result = await client.query(`
        UPDATE factorydetails 
        SET 
          factoryid = $3,
          department = $4,
          startDate = $5,
          endDate = $6,
          usage = $7,
          usageFee = $8,
          discountedPrice = $9
        WHERE id = $1 and factoryid = $2
      `, [id, factoryId, payload.factoryId, payload.department, payload.startDate, payload.endDate, payload.usage, payload.usageFee, payload.discountedPrice]);
      return {'id':id};
    } finally {
      client.release();
    }
  }
}