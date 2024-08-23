import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
  ){}

  async all() {
    return this.productModel.find().exec();
  }
}
