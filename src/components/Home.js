import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBthText="Existing Inventory"

        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBthText="Existing Inventory"

        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBthText="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBthText="Existing Inventory"
        />
        <Section 
            title="Lowest Cost Solar Panel in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBthText="Lear More"
        />
        <Section 
            title="Solar for New Roofs"
            description="Solar Roof Less Than a New Roof + Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom Order"
            rightBthText="Existing Inventory"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Show Now"
        />
        </Container>

    )
}

export default Home

const Container = styled.div`  /* Styled component allows to add code inside the js file*/
    height: 100vh;  /*vertical height*/
    width: 100vw;
    

`
