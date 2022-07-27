import React from 'react';
import styled from 'styled-components';

// images
import checkmark from '../../assets/greenCheckmark.png'

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 65%;
height: max-content;
`
const Image = styled.img`

`
const P = styled.p`
color: rgb(0, 128, 2);
font-size: 1.4vw;
font-weight: 800;
margin-top: 6%;
`

export default function FormSuccess() {
    return (
        <Div>
            <Image src={checkmark} alt=''/>
            <P>Cadastro preenchido com sucesso!</P>
        </Div>
    );
}