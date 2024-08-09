import { Router } from "express"
import * as productController from './product.controller.js'

const router = Router();

router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;