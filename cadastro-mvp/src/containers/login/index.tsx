import { useState } from "react"
import LoginS from "./style"


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        console.log("Dados de login: ", username, password)
    }

    return (
        <LoginS>
            <h2>Login</h2>
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
                    <button type="submit">Entrar</button>
                </form>
        </LoginS>
    )
}

export default Login