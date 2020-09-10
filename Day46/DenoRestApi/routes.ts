import {Router} from 'https://deno.land/x/oak/mod.ts';

import {getProducts,getAProduct,deleteAProduct,updateAProduct,addProduct} from './controllers/products.ts';
const router=new Router()

router.get('/api/products',getProducts)
router.post('/api/addproduct',addProduct)
router.get('/api/product/:id',getAProduct)
router.put('/api/product/:id',updateAProduct)
router.delete('/api/product/:id',deleteAProduct)




export default router;