import Image from "next/image";

const Header = () => {
    const logo = "/logo_pa.png";

    return (


        <header className="grid pl-24 pr-24 pt-10 justify-items-end">
            <Image src={logo} width={50} height={50} className="justify-right"></Image>

        </header>
    )
};

export default Header;