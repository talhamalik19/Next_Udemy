import fs from 'fs/promises'
import Link from 'next/link';
import path from "path";

function HomePage(props) {
  const {products} = props
  return (
    <ul>
      {products.map(product=>(
        <li key={product.id}><Link href={`/product/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps(){
  console.log("Re generating")
  const dataPath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const data = await fs.readFile(dataPath);
  const jsonData = JSON.parse(data);
  
  if(!jsonData){
    return{
      notFound:true,
      redirct: {
        destination: '/no-data'
      }
    }
  }

  if(jsonData.products.length === 0){
    return{
      notFound: true
    }
  }
  return{
    props: {
      products: jsonData.products
    },
    revalidate: 25,
  }
}

export default HomePage;
