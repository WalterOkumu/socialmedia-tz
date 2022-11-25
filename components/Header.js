import Image from "next/image";

const Header = () => {
    const logo = "/logo-pa.png";

    return (
        <header className="grid pl-24 md:pr-16 md:pl-10 justify-items-end">
            <Image src={logo} width={80} height={80} className="justify-right" alt="Logo"/>
        </header>
    )
};

export default Header;