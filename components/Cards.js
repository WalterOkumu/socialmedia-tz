const Cards = () => {

    return (
        <div className="pt-40 mx-auto">
            <h3 className="text-3xl font-bold text-center pb-10">O que oferecemos?</h3>
            <div className="mt-8 flex flex-wrap md:flex-nowrap md:flex-row mx-auto justify-center items-center gap-16 md:w-3/4 w-1/2">
                <div className="bg-[#FBED04] p-4 rounded-md w-[16rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-2 text-[1.3rem]">Um Plano de Marketing Digital</p>
                    <p className="text-justify">A presença online é muito mais do que ter um
                    website na internet: É preciso construir autoridade
                        e credibilidade de uma empresa tornando-se referência na área.</p>
                </div>
                <div className="bg-[#FBED04] p-4 rounded-md w-[16rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-2 text-[1.3rem]">Um Produtor de conteúdos</p>
                    <p className="text-justify">Disponibiliza-se um produtor de conteúdos, que fará
                    a gestão dos conteúdos acordados, conforme linhas de orientação e um cronograma de acção
                    pré-definido. O referido produtor de conteúdos funcionará como ponto focal 
                    com a empresa/instituição/organização.</p>
                </div>
                <div className="bg-[#FBED04] p-4 rounded-md w-[16rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-9 text-[1.3rem]">Um Designer</p>
                    <p className="text-justify">Disponibiliza-se um designer, responsável pela concepção e pelo
                    design das artes gráficas que acompanharão as publicações.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;