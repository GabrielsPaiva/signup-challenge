import React from 'react';
import styled from 'styled-components';

const Div = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 95%;
height: 100%;
`
const TitleBox = styled.div`
width: 100%;
height: max-content;
`
const Title = styled.h2`
font-size: 1.5vw;
font-weight: 500;
`
const Line = styled.div`
background-color: gray;
margin-top: 2%;
width: 100%;
height: 1px;
opacity: 0.4;
`
const InputsBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 60%;
`

// Email input area
const InputFieldSet = styled.fieldset`
display: flex;
align-items: center;
border-color: rgb(228, 228, 228);
border-radius: 10px;
width: 100%;
height: 24%;
`
const Legend = styled.legend`
color: rgb(0, 0, 0);
font-size: 0.9vw;
font-weight: 300;
margin-left: 2%;
padding: 0 1% 0 1%;
`
const Input = styled.input`
font-size: 1.5vw;
margin-left: 3%;
border: none;
width: 85%;
height: 90%;
outline: none;
`
const SubmitButton = styled.button`
background-color: rgb(3, 103, 252);
color: rgb(255, 255, 255);
font-size: 1.1vw;
border: none;
border-radius: 10px;
width: 100%;
height: 12%;
opacity: 0.3;
`

export default function Formulary() {
    return (
        <Div>
            <TitleBox>
                <Title>Signup</Title>
                <Line></Line>
            </TitleBox>
            <InputsBox>

                {/* Email */}
                <InputFieldSet>
                    <Legend>Email</Legend>
                    <Input name="email" type="email" required />
                </InputFieldSet>

                {/* user */}
                <InputFieldSet>
                    <Legend>Usuário</Legend>
                    <Input name="userName" type="text" required />
                </InputFieldSet>

                {/* password */}
                <InputFieldSet>
                    <Legend>Senha</Legend>
                    <Input name="password" type="password" required />
                </InputFieldSet>


            </InputsBox>
            <SubmitButton>Confirmar</SubmitButton>
        </Div>
    );
}