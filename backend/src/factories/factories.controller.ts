import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
  } from '@nestjs/common';
  
  import { FactoriesService } from './factories.service';
  import { UpdateFactoryDto } from './dto/update-factory.dto';
  import { Public } from '../auth/auth.decorator'; // Bu yolu kendi projenize göre güncelleyin
  
  @Controller('factories')
  export class FactoriesController {
    constructor(private readonly factoriesService: FactoriesService) {}
 

    @Get()
    async getFactories() {
      return this.factoriesService.getFactories();
    }
  
    @Get(':id')
    async getFactory(@Param('id') id: string) {
      return this.factoriesService.getFactory(id);
    }
    @Patch(':id')
    async updateFactory(
      @Param('id') id: string,
      @Body() updateFactoryDto: UpdateFactoryDto,
    ) {
      return this.factoriesService.updateFactory(id, updateFactoryDto);
    }
  }