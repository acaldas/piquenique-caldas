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
import Contact from "./contact"
import { Accordion, AccordionItem } from "./accordion"
import "./layout.css"
import { colors } from "../constants"
import MainImage from "./image-main"
import YearImage from "./image-year"
import TitleImage from "./image-title"
import Form from "./form"

const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const RightSection = styled(Section)`
  border-left: ${colors.border};
`

const StyledAccordionItem = styled(AccordionItem)`
  border-top: ${colors.border};
  background-color: ${props => props.background};
  color: ${colors.headingColor};
  padding: 32px 52px;
`

const Title = styled.div`
  flex-direction: "column";
  margin-bottom: 0;
  background-color: ${colors.dark};
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 60px;
`

const Rectangle = styled.div`
  width: 14px;
  height: 14px;
  transform: rotate(-45deg);
  background-color: #cfdd00;
  flex-shrink: 0;
`

const DateText = styled.h2`
  color: ${colors.white};
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;
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

const Layout = () => {
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
        <MainImage onClick={() => setIndexCallback(0)} />
        <Footer>
          <div style={{ marginBottom: 40, width: 203, height: 46 }}>
            <YearImage />
          </div>
          <h3
            style={{
              marginBottom: 0,
              fontFamily: "Cookie",
              fontSize: 85,
              fontWeight: "normal",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <i>~</i>
            <i style={{ padding: "0 30px" }}>Premium Edition</i>
            <i>~</i>
          </h3>
        </Footer>
      </Section>
      <RightSection grow={openIndex === 1 ? 3 : 1}>
        <Title grow={openIndex === 1 ? 3 : 1}>
          <div style={{ width: "100%", marginBottom: 44 }}>
            <TitleImage />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 44,
            }}
          >
            <Rectangle />
            <DateText>30 de MAIO</DateText>
            <Rectangle />
          </div>
        </Title>
        <Accordion
          style={{ borderLeft: colors.border }}
          open={openIndex === 1}
          onOpen={() => setIndexCallback(1)}
          onClose={() => setIndexCallback(undefined)}
        >
          <StyledAccordionItem
            title="Vens ao piquenique?"
            background={colors.medium}
          >
            <Form />
          </StyledAccordionItem>
          <StyledAccordionItem
            title="Local (brevemente)"
            background={colors.light}
          />
          <StyledAccordionItem
            title="Agenda (brevemente)"
            background={colors.lighter}
          />
          <StyledAccordionItem title="Contactos" background={colors.orange}>
            <Contact
              name="ines"
              number="91 437 79 65"
              style={{ marginTop: 30 }}
            />
            <Contact
              name="sara"
              number="91 485 68 64"
              style={{ marginTop: 24 }}
            />
            <Contact
              name="tomas"
              number="92 530 20 24"
              style={{ marginTop: 24 }}
            />
            <Contact
              name="afonso"
              number="91 887 53 45"
              style={{ marginTop: 24 }}
            />
          </StyledAccordionItem>
        </Accordion>
      </RightSection>
    </Container>
  )
}

export default Layout
