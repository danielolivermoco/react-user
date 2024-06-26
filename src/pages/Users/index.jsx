import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import { useHistory } from 'react-router-dom'


import { Container, H1, Image, ContainerItens, Button, User } from './styles'


function Users() {

  const [users, setUsers] = useState([])
  const history = useHistory()

  const baseUrl = "https://project-node-eta.vercel.app/"

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers} = await axios.get(`${baseUrl}/users`)
    setUsers(newUsers)
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`${baseUrl}/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage() {
    history.push("/")
  }

  return (
    <Container>
      <Image src={Avatar} alt='imagem-logo' />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="imagem-lixeira" /></button>
            </User>

          ))}

        </ul>


      <Button onClick={goBackPage}> <img src={Arrow} alt='imagem=seta' /> Voltar </Button>

      </ContainerItens>
    </Container>
  )
}

export default Users