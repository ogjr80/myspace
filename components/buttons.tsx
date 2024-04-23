'use client';

import { signOut, signIn, useSession } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link'

export function SignInButton(){
    const {data: session, status} = useSession(); 
    // console.log(session, status); 
    console.log(session?.user?.image)

    if(status === 'loading'){
        return <>loading...</>; 
    }

    if(status === 'authenticated'){
        <Link href={`/dashboard}`}>
            <Image 
                src={session?.user?.image!}
                width={32}
                height={32}
                alt="Gideon Ogongo"
            />
        </Link>
    }
    return <button onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton(){
    return <button onClick={()=> signOut()}>Sign Out</button>
}
