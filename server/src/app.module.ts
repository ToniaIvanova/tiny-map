import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { StationModule } from './station/station.module';
import { UserModule } from './user/user.module';
import { EnvModule } from './env.module';
import { AuthModule } from './auth/auth.module';
const { DB_URI } = process.env;

@Module({
  imports: [
    EnvModule,
    MongooseModule.forRoot(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ProductModule,
    RegionModule,
    StationModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
