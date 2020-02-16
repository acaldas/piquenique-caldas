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
    <div>
      <form
        name="rsvp"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ paddingTop: 24, flexDirection: "row", display: "flex" }}
      >
        <input type="hidden" name="form-name" value="rsvp" />
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              label="Claro que sim!"
              style={{ marginRight: 64 }}
              selected={yes}
              name="presença"
              value="sim"
              onClick={() => setYes(true)}
            />
            <Checkbox
              label="Este ano não posso ☹️"
              name="presença"
              value="não"
              selected={yes === false}
              onClick={() => setYes(false)}
            />
          </div>
          <HeaderText style={{ marginTop: 40 }}>
            Quantas pessoas trazes?
          </HeaderText>
          <TextField
            name="pessoas"
            value={persons}
            onChange={setPersons}
            placeholder="Não te esqueças de contar contigo"
            style={{ display: "block", width: "100%" }}
          />
          <HeaderText style={{ marginTop: 40 }}>Diz-nos quem és</HeaderText>
          <TextField
            name="nome"
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
              name="telefone"
              type="tel"
              value={phone}
              onChange={setPhone}
              placeholder="Telemóvel"
              style={{ display: "block", width: "35%" }}
            />
            <TextField
              name="email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="Email"
              style={{ display: "block", width: "60%" }}
            />
          </div>
        </div>
        <Button type="submit" style={{ alignSelf: "flex-end", marginLeft: 60 }}>
          Enviar
        </Button>
      </form>
    </div>
  )
}

export default Form
