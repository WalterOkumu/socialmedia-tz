import Image from "next/image";

const Top = () => {

    const media = "/social-media.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-16 md:mt-20">
                <div className="md:w-1/2 w-full">
<<<<<<< HEAD
                    <h1 className="text-5xl font-bold md:w-[20rem] ">Social Network Management</h1> 
                    <p className="mt-4 mb-4 w-96 text-3xl font-thin">
                       Choose your best plan for your company with the <span className="font-bold italic"> best discount.</span>. 
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                       Manage your Social Networks by producing content according to a pre-established guideline and schedule to increase and retain your number of online followers. 
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                       Inform and educate online followers about; your services and products, mission, vision, principles, and values to increase your website traffic 
=======
                    <h1 className="text-5xl font-bold md:w-[20rem] ">Gestão de redes sociais</h1> 
                    <p className="mt-4 mb-4 w-96 text-3xl font-thin">
                       Escolha o melhor plano para a sua empresa com o <span className="font-bold italic"> melhor desconto </span>. 
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                        A presença online é muito mais do que ter um website na internet:
                        É preciso construir autoridade e credibilidade de uma empresa
                        tornando-se referência na área.
                    </p>
                    <p className="mb-4 w-96 text-justify font-medium" >
                        As Páginas Amarelas podem ajudá-lo na criação do seu website através
                        de pacotes que vão ao encontro das suas necessidades.
>>>>>>> 5b20dd9d33229f9aa5c38a45ae2908338f19f8d5
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