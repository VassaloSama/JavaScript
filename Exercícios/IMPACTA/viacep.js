async function viaCep(cep) {
    let api = await fetch ("viacep.com.br/ws/"+cep+"/json/");

    if(api.ok){
        let response = await api.json();
        console.log(response.bairro);
    }
}

let cep = "09061640";
viaCep(cep);