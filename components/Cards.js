const Cards = () => {

    return (
        <div className="mt-8 flex justify-center items-center gap-6">
            <div className="bg-[#f2f000] p-4 rounded-md w-[16rem] h-[22rem]">
                <p className="font-bold text-center mb-2 text-[1.3rem]">Um Plano de Marketing Digital</p>
                <p className="text-justify">A presença online é muito mais do que ter um
                website na internet: É preciso construir autoridade
                    e credibilidade de uma empresa tornando-se referência na área.</p>
            </div>
            <div className="bg-[#f2f000] p-4 rounded-md w-[16rem] h-[22rem]">
                <p className="font-bold text-center mb-2 text-[1.3rem]">Um Produtor de conteúdos</p>
                <p className="text-justify">Disponibiliza-se um produtor de conteúdos, que fará
                a gestão dos conteúdos acordados, conforme linhas de orientação e um cronograma de acção
                pré-definido. O referido produtor de conteúdos funcionará como ponto focal 
                com a empresa/instituição/organização.</p>
            </div>
            <div className="bg-[#f2f000] p-4 rounded-md w-[16rem] h-[22rem]">
                <p className="font-bold text-center mb-9 text-[1.3rem]">Um Designer</p>
                <p className="text-justify">Disponibiliza-se um designer, responsável pela concepção e pelo
                design das artes gráficas que acompanharão as publicações.</p>
            </div>
        </div>
    );
}

export default Cards;