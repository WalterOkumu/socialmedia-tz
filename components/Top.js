import Image from "next/image";

const Top = () => {

    const media = "/social-media.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-16 md:mt-20">
                <div className="md:w-1/2 w-full">
                    <h1 className="text-5xl font-bold md:w-[20rem] ">Social Network Management</h1> 
                    <p className="mt-4 mb-4 w-96 text-3xl font-thin">
                       Choose your best plan for your company with the <span className="font-bold italic"> best discount.</span>. 
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                       Manage your Social Networks by producing content according to a pre-established guideline and schedule to increase and retain your number of online followers. 
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                       Inform and educate online followers about; your services and products, mission, vision, principles, and values to increase your website traffic 
                    </p>
                </div>

                <div className="md:w-1/2 w-full">
                    <Image src={media} width={1090} height={1000} className=""/>
                </div>
            </div>
        </div>
    )

}

export default Top;