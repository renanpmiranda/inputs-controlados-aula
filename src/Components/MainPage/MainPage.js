import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const mudeiNome = (event) => {
    console.log("mudei o input nome")
    console.log(event.target.value)
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    console.log("mudei o input idade")
    console.log(event.target.value)
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) => {
    console.log("mudei o input email")
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const imprimeDados = () => {
    console.log(`
      nome: ${nome}
      idade: ${idade}
      email: ${email}
    `)
    setNome("")
    setIdade("")
    setEmail("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input type="name" onChange={mudeiNome} value={nome}/>
        </label>
        <label>
          Idade:
          <Input type="number" onChange={onChangeIdade} value={idade}/>
        </label>
        <label>
          E-mail:
          <Input type="email" onChange={onChangeEmail} value={email}/>
        </label>
      <button onClick={imprimeDados} type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage