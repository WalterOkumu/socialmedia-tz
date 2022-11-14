import Image from "next/image";

const Top = () => {

    const media = "/social-media.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-16 text-[#f8f8ff]">
                <div className="md:w-1/2 w-full md:mt-24">
                    <h1 className="text-5xl font-bold md:w-[30rem]">Usimamizi wa Mtandao wa Kijamii</h1> 
                    <p className="mt-4 mb-4 md:w-96 text-3xl font-light italic">
                       Tunaahidi nini? Zaidi ya likes za facebook, <span className="font-bold">usimamizi wa kimkakati wa mitandao yako ya kijamii!</span>
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium">
                       Dhibiti Mitandao yako ya Kijamii kwa kutoa maudhui kulingana na mwongozo na ratiba iliyowekwa mapema ili kuongeza na kuhifadhi idadi yako ya wafuasi mtandaoni.
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium">
                       Wajulishe na waelimishe wafuasi mtandaoni kuhusu; huduma na bidhaa zako, dhamira, maono, kanuni na maadili ili kuongeza trafiki ya Tovuti yako.
                    </p>
                </div>

                <Image src={media} width={1090} height={1000} alt="Black Friday" className="object-contain md:w-1/2 w-full"/>
            </div>
        </div>
    )

}

export default Top;