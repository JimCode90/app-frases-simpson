import styled from "styled-components";

function Container({ children }) {
    return (
        <>
            <Content>
                { children }
            </Content>
        </>
    )
}

const Content = styled.div`
  max-width: 1200px;
  padding: 40px;
  margin: 0 auto;
`

export default Container