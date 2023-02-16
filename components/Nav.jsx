import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
    const links = [
        { title: "Home", href: "/" },
        { title: "Shop", href: "/products" },
        { title: "Contact", href: "/contact-us" },
    ];
    const [side, setSide] = useState(false);
    const router = useRouter();

    return (
        <nav className="nav cont z-40 fixed top-0 left-0 w-screen bg-white flex items-center py-4 border-b-2 border-b-slate-300 ph:justify-between">
            <Link href="/">
                <a className="logo mr-10 transition-all hover:scale-110 flex justify-center items-center tab:mr-6">
                    <Image alt="logo" src="/logo.png" width="35" height="20" />
                </a>
            </Link>
            <div
                className={`nav-links transition-all duration-500 ph:fixed ph:top-0 ${
                    side ? "ph:-right-0" : "ph:-right-full"
                } ph:bg-white ph:w-1/2 ph:h-screen ph:flex ph:flex-col ph:justify-center ph:shadow-2xl`}
            >
                {links.map((link) => (
                    <Link key={link.title} href={link.href}>
                        <a
                            className={`nav-link px-4 py-5 transition-all hover:text-gold blap:text-sm tab:px-3 ph:text-center ph:text-base ${
                                router.route === link.href &&
                                "font-semibold text-gold"
                            }`}
                            onClick={() => setSide(false)}
                        >
                            {link.title}
                        </a>
                    </Link>
                ))}
            </div>
            <div
                className="ham hidden text-2xl z-40 ph:flex"
                onClick={() => setSide(!side)}
            >
                {side ? <FiX /> : <FiMenu />}
            </div>
        </nav>
    );
};

export default Nav;
