import { useState } from "react"
import CadastroS from "./style"


const Cadastro = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [cep, setCep] = useState("")

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        console.log("Dados de Cadastro: ", username, password)
    }

    const handleSubmitCep = (event: {preventDefault: () => void}) => {
        event.preventDefault()

        console.log("Cep é: ", cep)
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
                    <label>Senha</label>
                    <input type="password"
                            placeholder="Senha"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="cep">
                        <label>CEP</label>
                        <input type="text"
                                onChange={(e) => setCep(e.target.value)}
                        />
                        <button type="button" onClick={handleSubmitCep} >Procurar</button>
                    </div>
                    <label>Estado</label>
                    <input type="text" disabled/>

                    <label>Cidade</label>
                    <input type="text" disabled/>

                    <label>Rua</label>
                    <input type="text" disabled/>

                    <label>Número</label>
                    <input type="number" required/>

                    <button type="submit">Cadastrar</button>
                </form>
        </CadastroS>
    )
}

export default Cadastro