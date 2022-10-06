import Image from "next/image";

const Top = () => {

    const media = "/social-media.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-16 md:mt-20">
                <div className="md:w-1/2 w-full">
                    <h1 className="text-5xl font-bold md:w-[20rem] ">Gestão de redes sociais</h1> 
                    <p className="mt-4 mb-4 w-96 text-3xl font-thin">
                       Choose the best plan for your business <span className="font-bold italic"> best promotionssss</span>. 
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                        A presença online é muito mais do que ter um website na internet:
                        É preciso construir autoridade e credibilidade de uma empresa
                        tornando-se referência na área.
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                        As Páginas Amarelas podem ajudá-lo na criação do seu website através
                        de pacotes que vão ao encontro das suas necessidades.
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