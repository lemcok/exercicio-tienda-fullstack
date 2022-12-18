import { Request, Response } from 'express';
// import Product from './products.model';
import { products } from './data';

export const getProducts = async (req: Request, res: Response) => {
  //  const products = await Product.find();
   res.json({
      data: products,
      message: 'Request success',
      status: '500'
   });
};
