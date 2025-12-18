"use client";
import RedGreenDot from "./RedGreenDot";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Wiki", href: "/wiki" },
        { name: "Rules", href: "/rules" },
        { name: "Download", href: "/download" },
        { name: "Community", href: "/community" }
    ];

    return (
        <nav className="navbar">
            <div className="nav-inner">

                {/* LEFT LOGO */}
                <Link href="/" className="nav-logo">
                    <Image 
                        src="/logos/logo.png"
                        alt="IN Logo"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>

                {/* NAV LINKS */}
                <div className="nav-links">
                    {links.map(link => (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`nav-item ${path === link.href ? "active" : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                
                <RedGreenDot />


            </div>
        </nav>
    );
}
