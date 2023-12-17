import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
  } from '@nestjs/common';
  
  import { FactoryDetailsService } from './factory-details.service';
  import { UpdateFactoryDetailDto } from './dto/update-factory-detail.dto';
  
  @Controller('factory-details')
  export class FactoryDetailsController {
    constructor(private readonly FactoryDetailsService: FactoryDetailsService) {}
 
  
    @Get(':factoryId')
    async getFactoryDetails(@Param('factoryId') factoryId: string) {
      return this.FactoryDetailsService.getFactoryDetails(factoryId);
    }
  
    @Get(':factoryId/detail/:id')
    async getFactoryDetail(
        @Param('factoryId') factoryId: string,
        @Param('id') id: string
    ) {
      return this.FactoryDetailsService.getFactoryDetail(factoryId,id);
    }
  
    @Patch(':factoryId/detail/:id')
    async updateFactory(
      @Param('factoryId') factoryId: string,
      @Param('id') id: string,
      @Body() updateFactoryDetailDto: UpdateFactoryDetailDto,
    ) {
      return this.FactoryDetailsService.updateFactoryDetail(factoryId, id, updateFactoryDetailDto);
    }
  }