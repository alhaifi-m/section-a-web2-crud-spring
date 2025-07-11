'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItmes = [
    {label: "Home", href: "/"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"},
    {label: "FAQ", href: "/faq"},
]

const Header = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);


  return (
    <div>
        <ul className="flex gap-5 p-10">
            { navItmes.map((link, index)=>{
                return (
                    <li key={index}>
                        <Link 
                        href={link.href}
                        className={ pathname === link.href ? "text-blue-500 font-bold": "" }
                        >
                    {link.label}
                    </Link>

                </li>
                )
            })}

        </ul>
    </div>
  )
}

export default Header