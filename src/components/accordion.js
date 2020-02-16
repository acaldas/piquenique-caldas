import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Header = styled.header`
  cursor: ${props => (props.enable ? "pointer" : "auto")};
`

const HeaderText = styled.h2`
  font-size: 48px;
  font-weight: bold;
  font-stretch: condensed;
`
const Content = styled.div`
  overflow: hidden;
  height: ${props => (props.open ? "auto" : 0)};
  transition: height 0.26s ease;
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
            onToggle: enabled =>
              setOpenIndex(openIndex === index || !enabled ? undefined : index),
          })}
        </ListItem>
      ))}
    </List>
  )
}
