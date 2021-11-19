import { Body, Controller, Param, Post } from '@nestjs/common';
import { Types } from 'mongoose';
import { CurrentUser } from './dto/current-user.dto';
import { StationPrepared } from './interfaces/station-prepared.interface';
import { StationService } from './station.service';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post('product/:productId')
  async getStationsByProductId(
    @Param('productId') productId: string,
    @Body() currentUser: CurrentUser,
  ): Promise<StationPrepared[]> {
    return this.stationService.getStationsByProductId(
      productId,
      currentUser._id,
    );
  }

  @Post('region/:regionId')
  async getStationsByRegionId(
    @Param('regionId') regionId: string,
    @Body() currentUser: CurrentUser,
  ): Promise<StationPrepared[]> {
    return this.stationService.getStationsByRegionId(regionId, currentUser._id);
  }

  @Post(':stationId/done')
  async putStationDone(
    @Param('stationId') stationId: string,
    @Body() currentUser: CurrentUser,
  ): Promise<{ stationId: Types.ObjectId }> {
    return this.stationService.putDone(
      stationId,
      currentUser._id,
      currentUser.done,
    );
  }
}
