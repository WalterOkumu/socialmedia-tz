import Image from "next/image";
import About from "./About";
import Form from "./Form";

const Top = () => {

    const media = "/social-media.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-4 md:gap-18 md:mt-20 text-[#f8f8ff] items-center">
                <div className="md:w-1/2 w-full">
                    <Form/>
                </div>

            <div className="md:w-1/2 w-full">
                <Image src={media} width={1090} height={1000} alt="Black Friday" className="object-contain "/>
            </div>
            </div>
        </div>
    )

}

export default Top;