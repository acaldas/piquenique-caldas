import styled from "styled-components"

export default styled.section`
  flex: ${props => props.grow ?? 1};
  align-items: stretch;
  transition: flex 0.25s;
  flex-direction: column;
  display: flex;
  overflow-y: auto;
`
