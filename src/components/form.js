import React, { useState } from "react"
import { colors } from "../constants"
import styled from "styled-components"
import Checkbox from "./checkbox"
import TextField from "./textfield"

const HeaderText = styled.h2`
  font-size: 48px;
  font-weight: bold;
  font-stretch: condensed;
  margin-bottom: 0;
`

const Button = styled.button`
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background-color: ${colors.white};
  color: ${colors.medium};
  padding: 13px 50px;
  font-size: 40px;
  font-weight: bold;
  font-stretch: condensed;
  cursor: pointer;

  &:hover {
    color: ${colors.dark};
  }
`

const Form = () => {
  const [yes, setYes] = useState()
  const [persons, setPersons] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div style={{ paddingTop: 24, flexDirection: "row", display: "flex" }}>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Checkbox
            label="Claro que sim!"
            style={{ marginRight: 64 }}
            selected={yes}
            onClick={() => setYes(true)}
          />
          <Checkbox
            label="Este ano não posso ☹️"
            selected={yes === false}
            onClick={() => setYes(false)}
          />
        </div>
        <HeaderText style={{ marginTop: 40 }}>
          Quantas pessoas trazes?
        </HeaderText>
        <TextField
          value={persons}
          onChange={setPersons}
          placeholder="Não te esqueças de contar contigo"
          style={{ display: "block", width: "100%" }}
        />
        <HeaderText style={{ marginTop: 40 }}>Diz-nos quem és</HeaderText>
        <TextField
          value={name}
          onChange={setName}
          placeholder="Nome"
          style={{ display: "block", width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <TextField
            type="tel"
            value={phone}
            onChange={setPhone}
            placeholder="Telemóvel"
            style={{ display: "block", width: "35%" }}
          />
          <TextField
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="Email"
            style={{ display: "block", width: "60%" }}
          />
        </div>
      </div>
      <Button style={{ alignSelf: "flex-end", marginLeft: 60 }}>Enviar</Button>
    </div>
  )
}

export default Form
