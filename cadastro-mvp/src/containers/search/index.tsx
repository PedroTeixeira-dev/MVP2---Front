import { useState } from "react"
import SearchS from "./style"

const Search = () => {

    const [searchEmail, setSearchEmail] = useState("")
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")


    const [editing, setEditing] = useState(true)

    const handleEdit = () => {
        setEditing(!editing)
    }

    const handleSave = () => {
        setEditing(!editing)
        handleEditing()
        alert("Dados salvos")
        setEmail("");
        setNome("");
        setCep("");
        setEstado("");
        setCidade("");
        setLogradouro("");
        setNumero("");
        setComplemento("");
    }

    const handleSearch = async () => {
        alert(`Procurando dados do email :${searchEmail}`)
        try {
            const url = `http://0.0.0.0:8000/api/custumers/${searchEmail}`

            const response = await fetch(url)

            const data = await response.json()

            setEmail(data.email);
            setNome(data.name);
            setCep(data.cep);
            setEstado(data.uf);
            setCidade(data.city);
            setLogradouro(data.street);
            setNumero(data.number);
            setComplemento(data.complement);

            console.log(data)

            alert('Dados do cliente encontrados');
          } catch (error) {
            console.error('Error fetching customer data:', error);
            alert('Erro ao procurar dados do cliente');
          }
      };

    const handleDeleting = async () => {

        let url = `http://0.0.0.0:8000/api/custumers/${searchEmail}`
        try {
            const response = await fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              }
            });
            const result = await response.json();

            if (response.ok) {

            console.log('Success:', result);
            alert('Customer deleted successfully');
            setEmail("");
            setNome("");
            setCep("");
            setEstado("");
            setCidade("");
            setLogradouro("");
            setNumero("");
            setComplemento("");
            }
            else {
              console.error('Error:', result);
              alert('Error deleting customer');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error deleting customer');
          }
    }


    const handleEditing = async () => {

        const formData = {
          cep: cep,
          city: cidade,
          complement: complemento,
          email: email,
          name: nome,
          number: numero,
          street: logradouro,
          uf: estado
        };

        let url = 'http://0.0.0.0:8000/api/custumers';
        try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });
          const result = await response.json();
          if (response.ok) {
            console.log('Success:', result);
            alert('Customer edited successfully');
          } else {
            console.error('Error:', result);
            alert('Error editing customer');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error editing customer');
        }
    }

    const handleDelete = () => {
        handleDeleting()
    }

return (
<SearchS>
    <h2>
        Procure um cliente pelo e-mail
    </h2>
    <div className="search--header">
    <label>Digite um email para procurar o cliente</label>
    <input type="text" placeholder="email a ser procurado" onChange={(e)=> setSearchEmail(e.target.value)} value={searchEmail} />
    <button onClick={handleSearch} >Procurar</button>
    </div>
    <div>
        <input type="text" disabled={editing} value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email" />
        <input type="text" disabled={editing} value={nome} onChange={(e)=> setNome(e.target.value)} placeholder="Nome" />
        <input type="text" disabled={editing} value={cep} onChange={(e)=> setCep(e.target.value)} placeholder="CEP" />
        <input type="text" disabled={editing} value={estado} onChange={(e)=> setEstado(e.target.value)} placeholder="Estado" />
        <input type="text" disabled={editing} value={cidade} onChange={(e)=> setCidade(e.target.value)} placeholder="Cidade" />
        <input type="text" disabled={editing} value={logradouro} onChange={(e)=> setLogradouro(e.target.value)} placeholder="Logradouro" />
        <input type="text" disabled={editing} value={numero} onChange={(e)=> setNumero(e.target.value)} placeholder="Número" />
        <input type="text" disabled={editing} value={complemento} onChange={(e)=> setComplemento(e.target.value)} placeholder="Complemento" />
        {editing ? <button className="edit--btn" onClick={handleEdit} >Editar</button> : <button className="edit--btn" onClick={handleSave} >Salvar</button>}
        <button className="del--btn" onClick={handleDelete} >Deletar</button>
    </div>
</SearchS>
)


}

export default Search