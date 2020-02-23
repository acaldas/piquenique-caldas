import React from "react"
import { colors, breakpoints } from "../constants"
import styled from "styled-components"
import ContactImage from "./image-contact"

const Text = styled.a`
  color: ${colors.headingColor};
  ${breakpoints.textLg}
  font-weight: bold;
  padding: 32px 36px;
  text-decoration: none;
  display: flex;
  align-items: center;

  ${breakpoints.tablet} {
    padding: 16px 18px;
    ${breakpoints.textMd}
  }

  ${breakpoints.mobile} {
    padding: 8px 10px;
  }

  @media (max-width: 420px) {
    ${breakpoints.textSm}
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
        alignItems: "stretch",
        flexFrow: 1,
        flexShrink: 0,
        display: "flex",
      }}
    >
      <Text href={`tel:${number.replace(/ /g, "")}`}>{number}</Text>
    </div>
  </div>
)

export default Contact
