export default function About() {
    return(
        <div className="md:w-1/2 w-full md:mt-24 mx-auto flex flex-col items-center mt-16 px-9">
            <h1 className="text-5xl font-bold ">Usimamizi wa Mitandao ya Kijamii</h1> 
            <p className="mt-4 mb-4 text-3xl font-light italic">
               Tunaahidi nini? Zaidi ya likes za Face book, <span className="font-bold">usimamizi wa kimkakati wa mitandao yako ya kijamii! </span>
            </p>
            <p className="mb-4 text-justify font-medium">
               Dhibiti Mitandao yako ya Kijamii kwa kutoa maudhui kulingana na mwongozo na ratiba iliyowekwa mapema ili kuongeza na kuhifadhi idadi yako ya wafuasi mtandaoni. 
            </p>
            <p className="mb-4 text-justify font-medium">
               Wajulishe na waelimishe wafuasi mtandaoni kuhusu; huduma na bidhaa zako, dhamira, maono, kanuni na maadili ili kukuza ufahamu wa chapa yako na kuongeza trafiki kwenye tovuti yako. 
            </p>
        </div>
    );
}