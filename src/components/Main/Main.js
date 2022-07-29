import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Formulary from '../Formulary/Formulary';
import FormSuccess from '../FormSuccess/FormSuccess';

const Div = styled.div`
background-color: rgb(255, 255, 255);
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
box-shadow: rgb(232, 232, 232) 5px 5px 6px 2px;
font-family: 'Roboto', sans-serif;
width: 35%;
height: 50%;

@media(max-width: 1024px) {
    width: 40%;
    height: 45%;
}
@media(max-width: 1024px) {
    width: 70%;
    height: 40%;
}
@media(max-width: 425px){
    width: 90%;
}
`

export default function Main() {
    return (
        <Router>
            <Div>
                <Routes>
                    <Route path="/" element={<Formulary />} />
                    <Route path='form-success' element={<FormSuccess />} />
                </Routes>
            </Div>
        </Router>
    );
}