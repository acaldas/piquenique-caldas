import React, { useState, useCallback } from "react"
import styled from "styled-components"
import Section from "./section"
import Contact from "./contact"
import { Accordion, AccordionItem } from "./accordion"
import "./layout.css"
import { colors, breakpoints } from "../constants"
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

  ${breakpoints.tablet} {
    display: block;
    flex-direction: column;
  }
`

const StyledMainImage = styled(MainImage)`
  ${breakpoints.tablet} {
    height: 300px;
  }

  ${breakpoints.mobile} {
    height: 240px;
  }
`

const RightSection = styled(Section)`
  border-left: ${colors.border};

  ${breakpoints.tablet} {
    border-left: none;
  }
`

const StyledAccordionItem = styled(AccordionItem)`
  border-top: ${colors.border};
  background-color: ${props => props.background};
  color: ${colors.headingColor};
  padding: 32px 52px;

  ${breakpoints.tablet} {
    padding: 32px;
  }

  ${breakpoints.mobile} {
    padding: 24px;
  }
`

const Title = styled.div`
  flex-direction: column;
  margin-bottom: 0;
  background-color: ${colors.dark};
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: ${props => (props.open ? "20%" : "40%")};
  min-height: ${props => (props.open ? "auto" : "314px")};
  transition-property: height, min-height;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition-duration: 0.25s;

  ${breakpoints.tablet} {
    min-height: 314px;
  }

  ${breakpoints.mobile} {
    min-height: 260px;
  }
`

const TitleImageContainer = styled.div`
  width: ${props => (props.open ? "400px" : "525px")};
  margin: 32px;
  max-height: calc(${props => (props.open ? 100 : 60)}% - 64px);
  max-width: calc(100% - 64px);

  ${breakpoints.tablet} {
    max-height: calc(100% - 64px);
    width: 525px;
  }

  ${breakpoints.mobile} {
    margin: 24px;
  }
`

const Rectangle = styled.div`
  width: 14px;
  height: 14px;
  transform: rotate(-45deg);
  background-color: #cfdd00;
  flex-shrink: 0;
`

const DateTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 32px 0px;
  ${breakpoints.mobile} {
    margin: 24px 0px;
  }
`

const DateText = styled.h2`
  color: ${colors.white};
  ${breakpoints.textXl};
  font-weight: 800;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;
  transition-property: font-size;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition-duration: 0.25s;
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
  padding: 40px 4px;

  ${breakpoints.mobile} {
    padding: 22px 2px 8px 2px;
  }
`

const YearImageContainer = styled.div`
  margin-bottom: 40px;

  ${breakpoints.tablet} {
    margin-bottom: 20px;
  }
`

const YearText = styled.h2`
  ${breakpoints.textXxl};
  font-weight: 800;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;
  transition-property: font-size;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition-duration: 0.25s;
`

const PremiumText = styled.h3`
  margin-bottom: 0;
  font-family: "Cookie";
  font-size: 85px;
  font-weight: normal;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${breakpoints.tablet} {
    font-size: 64px;
  }

  ${breakpoints.mobile} {
    font-size: 54px;
  }
`

const PremiumTextValue = styled.i`
  padding: 0 30px;

  ${breakpoints.mobile} {
    padding: 0 14px;
  }
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
        <StyledMainImage
          onClick={() => setIndexCallback(0)}
          imgStyle={{ objectPosition: "center top" }}
        />
        <Footer>
          <YearImageContainer>
            <YearText>2022</YearText>
          </YearImageContainer>
          <PremiumText>
            <i>~</i>
            <PremiumTextValue>Premium Edition</PremiumTextValue>
            <i>~</i>
          </PremiumText>
        </Footer>
      </Section>
      <RightSection grow={openIndex === 1 ? 3 : 1}>
        <Title open={openIndex === 1}>
          <TitleImageContainer open={openIndex === 1}>
            <TitleImage
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </TitleImageContainer>
          <DateTextContainer>
            <Rectangle />
            <DateText open={openIndex === 1}>16 de JULHO</DateText>
            <Rectangle />
          </DateTextContainer>
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
