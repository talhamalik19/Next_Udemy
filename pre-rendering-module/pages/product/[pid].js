import fs from 'fs/promises'
import path from 'path';

function ProductID(props){
    const {product} = props;

    //This is not required if we use fallback false. because when setting fallback false, next will pre fetch all the pages when we visit the visit
    if(!product){
        return <p>Loading...</p>
    }

    return(
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
    )

}

async function getData(){
    const data = await fs.readFile(path.join(process.cwd(), "data", "dummy-backend.json"));
    const jsonData = JSON.parse(data);
    return jsonData;
}

export async function getStaticProps(context){
    const {params} = context;
    console.log(params)
    const productId = params.pid;

   const jsonData = await getData();

   const filteredProduct = jsonData.products.find(product=> product.id === productId);

   if(!filteredProduct){
    return{
        notFound: true,
        
    }
   }

   return{
    props:{
        product: filteredProduct
    }
   }

}

export async function getStaticPaths(){
    const jsonData = await getData();

    const ids = jsonData.products.map(data=>data.id);
    const pathWithParams = ids.map(id=>({params: {pid: id}}))

    return{
        paths: pathWithParams,
        fallback: true  //fallback has three values, True, false, blocking
    }
}

export default ProductID;