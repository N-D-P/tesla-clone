import React from 'react'
import styled from 'styled-components'
function Section() {
    return (
        <Wrap>
            
            <ItemText>
                <h1> Model S</h1>
                <p> Order online for contactless delivery</p>
            </ItemText>

            <BUttonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </BUttonGroup>
            <DownArrow src="/images/down-arrow.svg">

            </DownArrow>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url('images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat : no-repeat; /* https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-repeat */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* vertical as flex-direction is column*/
    align-items: center;
`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align: center;
`

const BUttonGroup = styled.div`
    display:flex;
    margin-bottom:30px;

`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height : 40px;
    width : 256px;
    color : white;
    display : flex; /*Makes element flexible - Displays an element as a block-level flex container */
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.8;
    text-transform: uppercase; /* transform case of text */
    font-size:12px;
    cursor:pointer; /* to make cursor change when we take it on button */



`

const RightButton = styled(LeftButton)` /*inherit all the properties(css) of leftbutton*/
`

const DownArrow = styled.img`
margin-top : 20px;
height : 40px;
animation animateDown infinte 1.5s;
`




