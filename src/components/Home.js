import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
        <Section />
        <Section />
        <Section />
        </Container>

    )
}

export default Home

const Container = styled.div`  /* Styled component allows to add code inside the js file*/
    height: 100vh;  /*vertical height*/
    width: 100vw;
    

`
