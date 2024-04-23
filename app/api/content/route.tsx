const posts = [
    {
        title: 'Lorem Ipsum', 
        slug: 'Lorem Ipsum', 
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem totam numquam quas eos animi facere? Perferendis corrupti atque impedit sed dignissimos laboriosam officiis obcaecati fugit? Ut porro consectetur at sunt tempore dolore exercitationem sint dolores, aliquid delectus tempora nemo?'
    }, 
    {
        title: 'Lorem Ipsum', 
        slug: 'Lorem Ipsum', 
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem totam numquam quas eos animi facere? Perferendis corrupti atque impedit sed dignissimos laboriosam officiis obcaecati fugit? Ut porro consectetur at sunt tempore dolore exercitationem sint dolores, aliquid delectus tempora nemo?'
    }, 
    {
        title: 'Lorem Ipsum', 
        slug: 'Lorem Ipsum', 
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem totam numquam quas eos animi facere? Perferendis corrupti atque impedit sed dignissimos laboriosam officiis obcaecati fugit? Ut porro consectetur at sunt tempore dolore exercitationem sint dolores, aliquid delectus tempora nemo?'
    }, 
    {
        title: 'Lorem Ipsum', 
        slug: 'Lorem Ipsum', 
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem totam numquam quas eos animi facere? Perferendis corrupti atque impedit sed dignissimos laboriosam officiis obcaecati fugit? Ut porro consectetur at sunt tempore dolore exercitationem sint dolores, aliquid delectus tempora nemo?'
    }, 
    {
        title: 'Lorem Ipsum', 
        slug: 'Lorem Ipsum', 
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem totam numquam quas eos animi facere? Perferendis corrupti atque impedit sed dignissimos laboriosam officiis obcaecati fugit? Ut porro consectetur at sunt tempore dolore exercitationem sint dolores, aliquid delectus tempora nemo?'
    }
]


// import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET(){
    // const session = await getServerSession(); 
    return NextResponse.json(posts)
}