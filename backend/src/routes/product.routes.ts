import { Router } from "express";
import { getProducts } from "../controller/product.controller";

export const routerProduct = Router();

routerProduct.get('/', getProducts)


