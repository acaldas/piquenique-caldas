import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ArrowImage from "./image-arrow"
import { breakpoints } from "../constants"

const Header = styled.header`
  cursor: ${props => (props.enable ? "pointer" : "auto")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.h2`
  ${breakpoints.textMd}
  font-weight: bold;
  font-stretch: condensed;
  margin-bottom: 0px;
`
const Content = styled.div`
  overflow: hidden;
  transition-timing-function: ease;
  transition-duration: 0.35s;
  transition-delay: ${props => (props.open ? "0s" : "0.25s")};
  transition-property: max-height, transform;
  max-height: ${props => (props.open ? "100rem" : "0rem")};

  ${breakpoints.tablet} {
    transition-delay: 0s;
  }
`

export const AccordionItem = ({
  title,
  open,
  onToggle,
  children,
  ...props
}) => {
  return (
    <article {...props}>
      <Header
        enable={!!children}
        onClick={() => onToggle(!!children)}
        role="menuitem"
      >
        <HeaderText style={{ opacity: children ? 1 : 0.65 }}>
          {title}
        </HeaderText>
        <div
          style={{
            transform: open ? "rotateZ(90deg)" : "rotateZ(0)",
            display: "flex",
          }}
        >
          <ArrowImage />
        </div>
      </Header>
      <Content open={open}>{children}</Content>
    </article>
  )
}

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;
`
const ListItem = styled.li`
  margin-bottom: 0;
`

export const Accordion = ({ className, open, onOpen, onClose, children }) => {
  const [openIndex, setOpenIndex] = useState()
  useEffect(() => {
    !open && setOpenIndex(undefined)
  }, [open])

  useEffect(() => {
    openIndex !== undefined ? onOpen() : onClose()
  }, [onClose, onOpen, openIndex])

  return (
    <List className={className}>
      {React.Children.map(children, (child, index) => (
        <ListItem key={index}>
          {React.cloneElement(child, {
            open: index === openIndex,
            onToggle: enabled => {
              setOpenIndex(openIndex === index || !enabled ? undefined : index)
            },
          })}
        </ListItem>
      ))}
    </List>
  )
}
