import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog', 
    description: 'we are a social media website'
}
export default async function About(){
    return (
        <main> 
            <h1>Blog</h1>
            <p>We are a social media company</p>
        </main>
    )
}