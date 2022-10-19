import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    const links = [
        { title: "Shop", href: "/products" },
        { title: "Bespoke", href: "/bespoke" },
        { title: "Corporate", href: "/shop" },
        { title: "About", href: "/bespoke" },
        { title: "Contact", href: "/contact-us" },
    ];
    return (
        <nav className="nav cont z-40 fixed top-0 left-0 w-screen bg-white flex items-center py-4 border-b-2 border-b-slate-300">
            <Link href="/">
                <a className="logo mr-10 transition-all hover:scale-110 flex justify-center items-center">
                    <Image alt="logo" src="/logo.png" width="35" height="20" />
                </a>
            </Link>
            <div className="nav-links">
                {links.map((link) => (
                    <Link key={link.title} href={link.href}>
                        <a className="nav-link px-4 py-5 transition-all hover:text-gold">
                            {link.title}
                        </a>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
