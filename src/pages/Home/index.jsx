import React, { useState, useRef } from 'react'
import axios from 'axios'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import { useHistory } from 'react-router-dom'


import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from './styles'


function App() {

  const [users, setUsers] = useState([])
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  const baseUrl = "https://project-node-eta.vercel.app/"

  async function addNewUser() {

    const { data: newUser } = await axios.post(`${baseUrl}/users`, { name: inputName.current.value, age: inputAge.current.value })

    setUsers([...users, newUser])

    history.push("/usuarios")
  }


  return (
    <Container>
      <Image src={People} alt='imagem-logo' />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}> Cadastrar <img src={Arrow} alt='imagem=seta' /></Button>

      </ContainerItens>
    </Container>
  )
}

export default App