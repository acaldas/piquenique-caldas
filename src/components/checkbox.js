import React from "react"
import { colors, breakpoints } from "../constants"
import styled from "styled-components"

const Label = styled.h4`
  color: ${colors.white};
  ${breakpoints.textSm}
  font-weight: bold;
  margin-left: 18px;
`

const Circle = styled.div`
  flex-shrink: 0;
  border: 4px solid ${colors.white};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  padding: 4px;
`

const InnerCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${props => (props.selected ? colors.white : "transparent")};
`

const Checkbox = ({ onClick, name, value, label, selected, style }) => (
  <div
    onClick={onClick}
    style={{
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      ...style,
    }}
  >
    <input
      type="hidden"
      name={name}
      value={value}
      defaultChecked={selected}
      style={{ display: "hidden" }}
    />
    <Circle>
      <InnerCircle selected={selected} />
    </Circle>
    <Label>{label}</Label>
  </div>
)

export default Checkbox
