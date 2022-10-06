
const Form = () => {

    return (
     <div className="mt-40 mx-auto md:w-2/4 px-5">
<<<<<<< HEAD
        <h3 className="text-center text-3xl font-bold">Fill in the fields below to obtain the desired information free of charge</h3>

        <form className="flex flex-col justify-center items-center mt-10">
            <div>
                <label className="font-medium text-sm">Name: </label>
=======
        <h3 className="text-center text-3xl font-bold"> Preencha os campos abaixo para obter gratuitamente a informação desejada</h3>

        <form className="flex flex-col justify-center items-center mt-10">
            <div>
                <label className="font-medium text-sm">Nome: </label>
>>>>>>> 5b20dd9d33229f9aa5c38a45ae2908338f19f8d5
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded mb-3"></input>
            </div>

            <div>
                <label className="font-medium text-sm">E-mail: </label>
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded mb-3"></input>
            </div>

            <div className="mr-3">
<<<<<<< HEAD
                <label className="font-medium text-sm">Company: </label>
=======
                <label className="font-medium text-sm">Empresa: </label>
>>>>>>> 5b20dd9d33229f9aa5c38a45ae2908338f19f8d5
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded"></input>
            </div>

            <div className="mr-3">
                <input type="submit" className="bg-[#FBED04] w-[7rem] rounded p-0.5  m-5 hover:bg-[#FBED04]" ></input>
            </div>
        </form>

    </div>

    );
}

export default Form;