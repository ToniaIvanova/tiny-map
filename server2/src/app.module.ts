import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { StationModule } from './station/station.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.jsmec.mongodb.net/products',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
    ProductModule,
    RegionModule,
    StationModule,
    UserModule,
  ],
})
export class AppModule {}
