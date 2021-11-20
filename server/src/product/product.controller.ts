import { Controller, Get } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
