import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Users', 
    description: 'We are a social media company'
}
export default async function Users(){
    return (
        <main> 
            <h1>Users</h1>
            <p>We are a social media company</p>
        </main>
    )
}