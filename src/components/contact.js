import React from "react"
import { colors } from "../constants"
import styled from "styled-components"
import ContactImage from "./image-contact"

const Text = styled.h2`
  color: ${colors.headingColor};
  font-size: 48px;
  font-weight: bold;
  padding: 32px 36px;
  border-left: ${colors.border};
`

const Contact = ({ name, number, style }) => (
  <div
    style={{
      display: "flex",
      background: colors.white,
      border: colors.border,
      flexDirection: "row",
      ...style,
    }}
  >
    <ContactImage name={name} />
    <Text>{number}</Text>
  </div>
)

export default Contact
