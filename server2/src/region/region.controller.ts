import { Controller, Get } from '@nestjs/common';
import { Region } from './interfaces/region.interface';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  async findAll(): Promise<Region[]> {
    return this.regionService.findAll();
  }
}
