import Link from "next/link";
import { FiMail } from "react-icons/fi";
import Title from "./Title";

const Footer = () => {
    const links = {
        Home: "/",
        About: "/",
        Contact: "/",
        "Privacy Policy": "/",
    };

    return (
        <footer className="footer bg-black cont py-20 flex ph:flex-col-reverse ph:py-12">
            <div className="w-1/2 ph:w-full">
                <Title className="text-gold">Trojan Furniture</Title>
                <Link href="mailto:contact@craftworx.co.in">
                    <a className="flex items-center text-neutral-400 my-6">
                        <FiMail />
                        &nbsp;&nbsp;contact@craftworx.co.in
                    </a>
                </Link>
                <div className="links flex flex-col flex-wrap w-full h-32 py-4 mt-10">
                    {Object.keys(links).map((link, i) => (
                        <Link key={i} href={links[link]}>
                            <a className="text-gray mb-4 hover:underline">
                                {link}
                            </a>
                        </Link>
                    ))}
                </div>

                <span className="text-neutral-600">
                    Trojan Furniture ©2022 All Right Reserved
                </span>
            </div>

            <div className="newsletter w-1/2 pl-20 ph:w-full ph:p-0 ph:mb-16">
                <h4 className="text-gray text-3xl font-medium lap:text-2xl">
                    Subscribe to our Newsletter
                </h4>
                <div className="footer-input rounded-lg bg-white flex px-5 items-center w-2/3 shadow my-10 lap:w-full tab:px-4 ph:my-6">
                    <FiMail className="text-2xl" />
                    <input
                        className="px-5 py-4 w-full tab:px-3 tab:py-4 tab:text-xs ph:text-sm"
                        type="text"
                        placeholder="Enter your Email Address"
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </div>
        </footer>
    );
};

export default Footer;
