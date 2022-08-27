import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { TimeController } from './time/time.controller';
import { TimeService } from './time/time.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, TimeController],
  providers: [AppService, ProductsService, TimeService],
})
export class AppModule {}
