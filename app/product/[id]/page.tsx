import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Product', 
    description: 'we are a social media website'
}

interface Product {
      id: number,
      name: string,
      price: string,
      category: string,
      description: string
}
export default async function About({product}: {product: Product}){

    const products: Product[] = await fetch('http://localhost:3000/api/products')
    .then(
        (res)=>res.json()    
    ); 
    const prod = products.find((p)=> p.id === product.id)!;
    return (
        <main> 
            <p>{prod.name}</p>
        </main>
    )
}