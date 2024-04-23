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
export default async function About(){

    const products: Product[] = await fetch('http://localhost:3000/api/products')
    .then(
        (res)=>res.json()    
    ); 
    
    return (
        <main> 
            <div> 
                {
                 products.map((product) =>
                    
                    <div> 
                        <h2>{product.id} - {product.category}</h2>
                        <h3>{product.name} - ${product.price} </h3>
                        <p>{product.description}</p>
                    </div> 
                )
                }
            </div> 
        </main>
    )
}