import { Injectable, NotFoundException } from '@nestjs/common';
import { IFactory } from './factories.model';
import { UpdateFactoryDto } from './dto/update-factory.dto';
import pool from '../database/postgresql-db.config';

@Injectable()
export class FactoriesService {

  async getFactories() {
    const client = await pool.connect();

    try {
      const result = await client.query(`select * from factories`);
      return result.rows;
    } finally {
      client.release();
    }
  }
  async getFactory(id: string) {
    const client = await pool.connect();

    try {
      const result = await client.query(`select * from factories where id = `+id);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async updateFactory(id: string, payload: UpdateFactoryDto) {
    const client = await pool.connect();

    try {
      const result = await client.query(`
      UPDATE factories
      SET 
        name = $2,
        startDate = $3,
        endDate = $4,
        numberOfEmployee = $5,
        isFree = $6
      WHERE id = $1
    `, [id, payload.name, payload.startDate, payload.endDate, payload.numberOfEmployee, payload.isFree]);

      return {'id':id};;
    } finally {
      client.release();
    }
  }
}