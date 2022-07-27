import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom"
import * as S from "./Style"

export default function Formulary() {

    const [emailInputValue, setEmailInputValue] = useState("")
    const [userInputValue, setUserInputValue] = useState("")
    const [passwordInputValue, setPasswordInputValue] = useState("")

    const emailFieldsetStyle = useRef()
    const emailInputStyle = useRef()

    const userFieldsetStyle = useRef()
    const userInputStyle = useRef()

    const passwordFieldsetStyle = useRef()
    const passwordInputStyle = useRef()

    const emailErrorBorderStyle = () => {
        let emailStyle = emailFieldsetStyle.current.style

        if (emailInputValue.match(/^\S+@\S+\.\S+$/)) {
            emailStyle.borderColor = 'inherit'
            emailStyle.color = 'inherit'

        } else {
            emailStyle.borderColor = 'red'
            emailStyle.color = 'red'
        }
    }
    const userErrorBorderStyle = () => {
        let userStyle = userFieldsetStyle.current.style

        if (userInputValue.length < 4) {
            userStyle.borderColor = 'red'
            userStyle.color = 'red'

        } else {
            userStyle.borderColor = 'inherit'
            userStyle.color = 'inherit'
        }
    }
    const passwordErrorBorderStyle = () => {
        let passwordStyle = passwordFieldsetStyle.current.style

        if (passwordInputValue.length < 8) {
            passwordStyle.borderColor = 'red'
            passwordStyle.color = 'red'

        } else if (passwordInputValue.match("^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$")) {
            passwordStyle.borderColor = 'inherit'
            passwordStyle.color = 'inherit'

        } else {
            passwordStyle.borderColor = 'red'
            passwordStyle.color = 'red'
        }
    }

    console.log()

    return (
        <S.Div onSubmit={(e) => { e.preventDefault() }}>
            <S.TitleBox>
                <S.Title>Signup</S.Title>
                <S.Line></S.Line>
            </S.TitleBox>
            <S.InputsBox>

                {/* Email */}
                <S.InputFieldSet ref={emailFieldsetStyle}>
                    <S.Legend>Email</S.Legend>
                    <S.Input ref={emailInputStyle} onChange={(e) => { setEmailInputValue(e.target.value); }} name="email" type="email" required />
                </S.InputFieldSet>

                {/* user */}
                <S.InputFieldSet ref={userFieldsetStyle}>
                    <S.Legend>Usuário</S.Legend>
                    <S.Input ref={userInputStyle} onChange={(e) => { setUserInputValue(e.target.value); }} name="userName" type="text" required />
                </S.InputFieldSet>

                {/* password */}
                <S.InputFieldSet className='id' ref={passwordFieldsetStyle}>
                    <S.Legend>Senha</S.Legend>
                    <S.Input ref={passwordInputStyle} onChange={(e) => { setPasswordInputValue(e.target.value); }} name="password" type="password" required />
                </S.InputFieldSet>


            </S.InputsBox>
            <Link to=""><S.SubmitButton onClick={() => { emailErrorBorderStyle(); userErrorBorderStyle(); passwordErrorBorderStyle() }}>Confirmar</S.SubmitButton></Link>
        </S.Div>
    );
}