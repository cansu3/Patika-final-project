import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import elasticClient from '../database/elasticsearch-db.config';

@Injectable()
export class UsersService {

    async getUser(id: string) {

        try {
            const result = await elasticClient.search({
                index: "users",
                body: {
                    query: {
                        match: {
                            _id: id
                        }
                    }
                }
            });
          return result.hits.hits[0]._source;
        } finally {
        }
      }

      async findUser(email: string): Promise<any>  {

        try {
            const result = await elasticClient.search({
                index: "users",
                body: {
                    query: {
                        match: {
                            email: email
                        }
                    }
                }
            });
          return result.hits.hits[0]._source;
        } finally {
        }
      }
  async createUser(payload: CreateUserDto) {

    try {
        const result = await elasticClient.index({
            index: "users",
            document:payload
          });

      return {id: result._id};
    } finally {
    }
  }
}