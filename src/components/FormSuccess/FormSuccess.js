import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// images
import checkmark from '../../assets/greenCheckmark.png'

// loading style
const spinningCircle = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`
const LoadingBox = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 28%;
height: 30%;
animation: ${spinningCircle} .7s ease-in-out infinite;
`
const LoadingCircle = styled.div`
border: solid 10px ;
border-color: rgb(0, 0, 0) transparent transparent transparent;
border-radius: 50%;
width: 60%;
height: 60%;
`


// success message
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 65%;
height: max-content;
`
const Image = styled.img``

const P = styled.p`
color: rgb(0, 128, 2);
font-size: 1.4vw;
font-weight: 800;
margin-top: 6%;
`

export default function FormSuccess() {
    const [isLoadingOver, setIsLoadingOver] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingOver(true)
        }, 3000)
    }, [])

    const mainReturn = () => {
        if (!isLoadingOver) {
            return (
                <LoadingBox>
                    <LoadingCircle>
                        <div></div>
                        <div></div>
                        <div></div>
                    </LoadingCircle>
                </LoadingBox>
            )
        } else {
            return (
                <Div>
                    <Image src={checkmark} alt='' />
                    <P>Cadastro preenchido com sucesso!</P>
                </Div>
            )
        }
    }

    return (
        <>
        {mainReturn()}
        </>
    )
}