import React from "react"
import { colors, breakpoints } from "../constants"
import styled from "styled-components"

const Input = styled.input`
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  color: ${colors.white};
  padding: 21px 16px;
  ${breakpoints.textSm}
  font-weight: 600;
  border-bottom: 4px solid ${colors.white};

  &::placeholder {
    opacity: 0.8;
  }
`

const TextField = ({ onChange, ...props }) => (
  <Input
    type="text"
    onChange={event => onChange(event.target.value)}
    {...props}
  />
)

export default TextField
