import React, { useState } from "react"
import { colors, breakpoints } from "../constants"
import styled from "styled-components"
import Checkbox from "./checkbox"
import TextField from "./textfield"

const HeaderText = styled.h2`
  ${breakpoints.textMd}
  font-weight: bold;
  font-stretch: condensed;
  margin-bottom: 0;
`

const Container = styled.div`
  margin-right: 60px;
  ${breakpoints.tablet} {
    margin-right: 0px;
  }
`

const PhoneTextField = styled(TextField)`
  margin-top: 20px;
  display: block;
  width: 35%;

  ${breakpoints.tablet} {
    width: 100%;
  }
`

const EmailTextField = styled(TextField)`
  margin-top: 20px;
  display: block;
  width: 60%;

  ${breakpoints.tablet} {
    width: 100%;
  }
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
  ${breakpoints.textMd};
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
        style={{
          paddingTop: 24,
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <input type="hidden" name="form-name" value="rsvp" />
        <Container>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <Checkbox
              label="Claro que sim!"
              style={{ marginRight: 64, marginTop: 12 }}
              selected={yes}
              name="presença"
              value="sim"
              onClick={() => setYes(true)}
            />
            <Checkbox
              label="Este ano não posso ☹️"
              style={{ marginTop: 12 }}
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
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <PhoneTextField
              name="telefone"
              type="tel"
              value={phone}
              onChange={setPhone}
              placeholder="Telemóvel"
            />
            <EmailTextField
              name="email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="Email"
            />
          </div>
        </Container>
        <Button type="submit" style={{ alignSelf: "flex-end", marginTop: 60 }}>
          Enviar
        </Button>
      </form>
    </div>
  )
}

export default Form
