import {Product} from '../types.ts';
import {v4} from 'https://deno.land/std/uuid/mod.ts'
let products:Product[]=[
    {
        id:'1',
        name:'one',
        description:'Test one'
    },
    {
        id:'2',
        name:'two',
        description:'Test two'
    },  {
        id:'4',
        name:'Four',
        description:'Test Four'
    },  {
        id:'3',
        name:'three',
        description:'Test Three'
    },

]


// Get all products
const getProducts=({response}:{response:any})=>{
   response.body={
         success:true,
         data:products
   }
}

// Get a single product
const getAProduct=({params,response}:{params:{id:string},response:any})=>{
    const product:Product | undefined  =products.find(p=>p.id===params.id)

    if(product){
        response.status=200
        response.body={
        success:true,
        data:product
        }
    }else{
        response.status=404;
        response.body={
        success:false,
        message:'No products found'
        }
    }
}

//add a product
const addProduct=async ({request,response}:{request:any,response:any})=>{
    const body=await request.body()
    
    if(!request.hasBody){
        response.status=404;
        response.body={
        success:false,
        message:'No data'
        }
    }else{
        const product:Product=body.value
        product.id=v4.generate()
        console.log(product)
        products.push(product)
        response.status=200;
        response.body={
        success:true,
        data:product
        }
    }

}

// update a product
const updateAProduct=async ({params,request,response}:{params:{id:string},request:any,response:any})=>{
    const product:Product | undefined  =products.find(p=>p.id===params.id)
       
    if(product){
        const body =await request.body()

        const updatedData:{name?:string,description?:string}=body.value
        products=products.map(p=> p.id===params.id?{...p,...updatedData} :p)
        response.status=200;
        response.body={
        success:true,
        data:products
        }

    }else{
        response.status=404;
        response.body={
        success:false,
        message:'No products found'
        }
    }

}

//delete a product
const deleteAProduct=({params,response}:{params:{id:string},response:any})=>{
  products=products.filter(p=>p.id!==params.id)
  response.body={
         success:true,
         msg:'Product Removed'
  }
}

export {getProducts,getAProduct,addProduct,updateAProduct,deleteAProduct}