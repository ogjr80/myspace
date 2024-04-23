import Image from 'next/image'; 
import Link from 'next/link'; 
import styles from './navbar.module.css'


export default function Navbar(){
    return ( 
        <nav className={styles.nav}> 
            <Image 
                src="/vercel.svg"
                width={216} 
                height={30}
                alt="nextSpace logo"
            />
            <ul className={styles.links}>
                <li> 
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/product'}>Products</Link>
                </li>
                <li>
                    <Link  href={'/about'}>About</Link>
                </li> 
                <li>
                    <Link href={'/blog'}>Blog</Link></li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
            </ul>  
        </nav>
    )
}