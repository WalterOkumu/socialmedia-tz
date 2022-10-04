import Image from "next/image";

const Top = () => {

    const media = "/social-media.png";

    return (
        <div className="pl-20">
            <div className="flex flex-row">
                <div className="w-1/2 p-40">
                    <h1 className="text-5xl w-[20rem] "><strong>Gestão de redes sociais</strong></h1> 

                    <p className="mt-4 mb-4 w-96 text-3xl text-justify italic">
                       Escolha o melhor plano para a sua empresa com o <strong> melhor desconto </strong>. 
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

                <div className="w-1/2">
                    <Image src={media} width={1090} height={1000} className=""/>
                </div>
            </div>
        </div>
    )

}

export default Top;