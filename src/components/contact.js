import React from "react"
import { colors, breakpoints } from "../constants"
import styled from "styled-components"
import ContactImage from "./image-contact"

const Text = styled.h2`
  color: ${colors.headingColor};
  ${breakpoints.textLg}
  font-weight: bold;
  padding: 32px 36px;

  ${breakpoints.mobile} {
    padding: 16px 18px;
    ${breakpoints.textMd}
  }
`

const Contact = ({ name, number, style }) => (
  <div
    style={{
      display: "flex",
      maxWidth: 600,
      background: colors.white,
      border: colors.border,
      flexDirection: "row",
      ...style,
    }}
  >
    <ContactImage name={name} />
    <div
      style={{
        borderLeft: colors.border,
        alignItems: "center",
        flexFrow: 1,
        display: "flex",
      }}
    >
      <Text>{number}</Text>
    </div>
  </div>
)

export default Contact
