import React from 'react'
import styled from 'styled-components'
function Section(props) {
    return (
        <Wrap bgImage ={props.backgroundImg}>
            
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>

            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                {props.rightBthText && 
                    <RightButton>
                        {props.rightBthText}
                    </RightButton>               
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg">

            </DownArrow>
            </Buttons>
            
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
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px) {  /*Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones. */
        flex-direction: column; /* when width becomes 768 its makes flex-direction: column */
    }

`

const Buttons = styled.div`
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
    margin:10px;


`

const RightButton = styled(LeftButton)` /*inherit all the properties(css) of leftbutton*/
    background: white;
    opacity: 0.65;
    color:black;
`

const DownArrow = styled.img`
overflow-x: hidden;
height : 40px;
animation: animateDown infinite 1.5s;
`




