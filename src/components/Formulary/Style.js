import styled from "styled-components"

export const Div = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 95%;
height: 100%;
a{
    color: rgb(255, 255, 255);
    text-decoration: none;
    width: 100%;
    height: 12%;
}
`
export const TitleBox = styled.div`
width: 100%;
height: max-content;
`
export const Title = styled.h2`
font-size: 1.5vw;
font-weight: 500;

@media(max-width: 768px){
    font-size: 2.5vw;
}
@media(max-width: 425px){
    font-size: 3vw;
}
`
export const Line = styled.div`
background-color: gray;
margin-top: 2%;
width: 100%;
height: 1px;
opacity: 0.4;
`
export const InputsBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 60%;
`

// Email input area
export const InputFieldSet = styled.fieldset`
display: flex;
align-items: center;
border-color: rgb(228, 228, 228);
border-radius: 10px;
width: 100%;
height: 24%;

&:focus-within{
    color: rgb(98, 166, 248);
    border-color: rgb(98, 166, 248);
}
`
export const Legend = styled.legend`
font-size: 0.9vw;
font-weight: 300;
margin-left: 2%;
padding: 0 1% 0 1%;

@media(max-width: 768px){
    font-size: 1.5vw;
}
@media(max-width: 425px){
    font-size: 2.5vw;
}
`
export const Input = styled.input`
font-size: 1.5vw;
margin-left: 3%;
border: none;
width: 85%;
height: 90%;
outline: none;

@media(max-width: 768px){
    font-size: 2.2vw;
}
@media(max-width: 425px){
    font-size: 2.8vw;
}
`
export const Icon = styled.img`
width: 5%;
height: 60%;
margin: 0 0 1% 2%;
`
export const SubmitButton = styled.button`
background-color: rgb(3, 103, 252);
color: rgb(255, 255, 255);
font-size: 1.1vw;
border: none;
border-radius: 10px;
width: 100%;
height: 100%;
opacity: 0.3;
cursor: pointer;

@media(max-width: 768px){
    font-size: 1.5vw;
}
@media(max-width: 425px){
    font-size: 2.5vw;
}

`