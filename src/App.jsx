import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  const [cpf, setCpf] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [id, setId] = useState(1)

  const alerta = () => {
    alert('Olá')
  }

  const handleSubmit = (e) => {
    console.log(cpf)
    console.log(name)
    console.log(email)
    console.log(rua)
    console.log(numero)
    console.log(bairro)
    console.log(cidade)
    console.log(estado)

  }

  const [user, setUser] = useState({
    cpf: "",
    name: "",
    email: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
    })
  const getUser = (id) => {
    fetch(`https://api-grupocinco.onrender.com/users/${id}`)
    .then((resposta) => resposta.json())
    .then((json) => {
      console.log(json)
      if(json){
        setUser(json)
      }
    })
  }
  useEffect(() => {
    getUser(id)
  },[id])

  return (
    <>
    <div className='pet'>
      <Menu title="Pet Sapeca" />
      <p onClick={alerta}>Dados</p>
      <p>Cpf: {cpf}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Rua: {rua}</p>
      <p>Numero: {numero}</p>
      <p>Bairro: {bairro}</p>
      <p>Cidade: {cidade}</p>
      <p>Estado: {estado}</p>
      <hr />
      <form>
      <input 
        onChange={(e) => {setCpf(e.target.value)}}
        type="text" 
        placeholder='Digite seu cpf' /><br />
        <input 
        onChange={(e) => {setName(e.target.value)}}
        type="text" 
        placeholder='Digite seu nome' /><br />
        <input 
        onChange={(e) => {setEmail(e.target.value)}}
        type="text" 
        placeholder='Digite seu email' /><br />
         <input 
        onChange={(e) => {setRua(e.target.value)}}
        type="text" 
        placeholder='Digite a rua' /><br />
         <input 
        onChange={(e) => {setNumero(e.target.value)}}
        type="text" 
        placeholder='Digite o número' /><br />
         <input 
        onChange={(e) => {setBairro(e.target.value)}}
        type="text" 
        placeholder='Digite o bairro' /><br />
         <input 
        onChange={(e) => {setCidade(e.target.value)}}
        type="text" 
        placeholder='Digite a cidade' /><br />
         <input 
        onChange={(e) => {setEstado(e.target.value)}}
        type="text" 
        placeholder='Digite o estado' /><br />
        <button type='button' onClick={handleSubmit}>Cadastrar</button> 
      </form> 
      <hr />
      </div>
      <div>
      <p>Usuarios</p>
      <input type="text" onChange={(e) => {setId(e.target.value)}} />
      <p>Cpf: {user.cpf} </p>
      <p>Nome: {user.name} </p>
      <p>Email: {user.email}</p>
      <p>Rua: {user.rua} </p>
      <p>Numero: {user.numero}</p>
      <p>Bairro: {user.bairro}</p>
      <p>Cidade: {user.cidade}</p>
      <p>Estado: {user.estado}</p>
      </div>
    </>
    
  )
}
export default App
