/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "./section"
import { Accordion, AccordionItem } from "./accordion"
import "./layout.css"
import { colors } from "../constants"
import Image from "./image"

const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const StyledAccordion = styled(Accordion)`
  border-left: ${colors.border};
`

const StyledAccordionItem = styled(AccordionItem)`
  border-top: ${colors.border};
  background-color: ${props => props.background};
  color: ${colors.dark};
  padding: 20px;
`

const Title = styled.h1`
  margin-bottom: 0;
  background-color: ${colors.dark};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Footer = styled.div`
  flex: 2;
  color: ${colors.medium};
  background-color: ${colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-top: ${colors.border};
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
`

const Layout = ({ children }) => {
  const [openIndex, setOpenIndex] = useState()
  const setIndexCallback = useCallback(
    index => {
      setOpenIndex(index)
    },
    [setOpenIndex]
  )
  return (
    <Container>
      <Section grow={1}>
        <Image onClick={() => setIndexCallback(0)} />
        <Footer>
          <h3 style={{ marginBottom: 40 }}>2020</h3>
          <h3 style={{ marginBottom: 0 }}>
            <i>~ Premium Edition ~</i>
          </h3>
        </Footer>
      </Section>
      <Section grow={openIndex === 1 ? 3 : 1}>
        <Title>
          Piquenique
          <br /> CALDAS
        </Title>
        <StyledAccordion
          style={{ borderLeft: colors.border }}
          open={openIndex === 1}
          onOpen={() => setIndexCallback(1)}
          onClose={() => setIndexCallback(undefined)}
        >
          <StyledAccordionItem
            title="Vens ao piquenique?"
            background={colors.medium}
          >
            <div style={{ height: 300 }}>Teste</div>
          </StyledAccordionItem>
          <StyledAccordionItem
            title="Local (proximamente)"
            background={colors.light}
          />
          <StyledAccordionItem
            title="Agenda (proximamente)"
            background={colors.lighter}
          />
          <StyledAccordionItem
            title="??? (proximamente)"
            background={colors.orange}
          />
        </StyledAccordion>
      </Section>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
