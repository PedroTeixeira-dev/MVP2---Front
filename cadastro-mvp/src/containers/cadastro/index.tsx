import { useState } from "react"
import CadastroS from "./style"


const Cadastro = () => {

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [number, setNumber] = useState("")
    const [complemento, setComplemento] = useState("")

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        console.log("Dados de Cadastro: ", username, name, estado, cidade, logradouro, number, complemento)

        setUsername("");
        setName("");
        setCep("");
        setEstado("");
        setCidade("");
        setLogradouro("");
        setNumber("");
        setComplemento("");
    }

    const handleSubmitCep = (event: {preventDefault: () => void}) => {
        event.preventDefault()

        if (cep.length === 8) {
            console.log("Cep é: ", cep)
            getAdress(cep)
        }
        else {
            alert("CEP deve conter 8 digitos")
        }
    }

    const getAdress = async (cep: string) => {

        const apiURL = `https://viacep.com.br/ws/${cep}/json/`

        const response = await fetch(apiURL)

        const data = await response.json()

        console.log(data)

        if ("erro" in data) {
            alert("Cep inválido, tente novamente")
        }
        else {
            alert("CEP correto")

            setEstado(data.uf)
            setCidade(data.localidade)
            setLogradouro(data.logradouro)
        }

    }

    return (
        <CadastroS>
            <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <label>E-mail</label>
                    <input type="text"
                            placeholder="email"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    <label>Nome</label>
                    <input type="text"
                            placeholder="Nome"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    />
                    <div className="cep">
                        <label>CEP</label>
                        <input type="text"
                                onChange={(e) => setCep(e.target.value)}
                                value={cep}
                        />
                        <button type="button" onClick={handleSubmitCep} >Procurar</button>
                    </div>
                    <label>Estado</label>
                    <input type="text" id="estado" value={estado} disabled/>

                    <label>Cidade</label>
                    <input type="text" id="cidade" value={cidade} disabled/>

                    <label>Logradouro</label>
                    <input type="text" id="logradouro" value={logradouro} disabled/>

                    <label>Número</label>
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required/>

                    <label>Complemento (opcional)</label>
                    <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} />

                    <button type="submit">Cadastrar</button>
                </form>
        </CadastroS>
    )
}

export default Cadastro