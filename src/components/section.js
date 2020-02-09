import styled from "styled-components"

export default styled.section`
  flex: ${props => props.grow ?? 1};
  align-items: stretch;
  transition: flex 1s;
  flex-direction: column;
  display: flex;
  overflow-y: auto;
`
