import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom"
import * as S from "./Style"

// images
import userIcon from '../../assets/userIcon.png'
import passwordIcon from '../../assets/passwordIcon.png'

export default function Formulary() {

    const [emailInputValue, setEmailInputValue] = useState("")
    const [userInputValue, setUserInputValue] = useState("")
    const [passwordInputValue, setPasswordInputValue] = useState("")

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isUserValid, setIsUserValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const emailFieldsetStyle = useRef()
    const userFieldsetStyle = useRef()
    const passwordFieldsetStyle = useRef()


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

        if (userInputValue.length >= 4) {
            userStyle.borderColor = 'inherit'
            userStyle.color = 'inherit'
            setIsUserValid(true)

        } else {
            userStyle.borderColor = 'red'
            userStyle.color = 'red'
            setIsUserValid(false)

        }
    }
    const passwordErrorBorderStyle = () => {
        let passwordStyle = passwordFieldsetStyle.current.style

        if (passwordInputValue.length < 8) {
            passwordStyle.borderColor = 'red'
            passwordStyle.color = 'red'
            setIsPasswordValid(false)

        } else if (passwordInputValue.match("^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$")) {
            passwordStyle.borderColor = 'inherit'
            passwordStyle.color = 'inherit'
            setIsPasswordValid(true)

        } else {
            passwordStyle.borderColor = 'red'
            passwordStyle.color = 'red'
            setIsPasswordValid(false)
        }
    }

    const signupBox = () => {
        return (
            <S.TitleBox>
                <S.Title>Signup</S.Title>
                <S.Line></S.Line>
            </S.TitleBox>
        )
    }

    const inputsBox = () => {
        return (
            <S.InputsBox>

                {/* Email */}
                <S.InputFieldSet ref={emailFieldsetStyle}>
                    <S.Legend>Email</S.Legend>
                    <S.Input title={!isEmailValid ? 'Digite um email válido. Ex: abc123@gmail.com' : ''} onChange={(e) => { setEmailInputValue(e.target.value); }} name="email" type="email" required />
                    <S.Icon src={userIcon} alt='ícone de uma pessoa' />
                </S.InputFieldSet>

                {/* user */}
                <S.InputFieldSet ref={userFieldsetStyle}>
                    <S.Legend>Usuário</S.Legend>
                    <S.Input title={!isUserValid ? 'O usuário deve conter ao menos 4 caracteres' : ''} onChange={(e) => { setUserInputValue(e.target.value); }} name="userName" type="text" required />
                    <S.Icon src={userIcon} alt='ícone de uma pessoa' />
                </S.InputFieldSet>

                {/* password */}
                <S.InputFieldSet className='id' ref={passwordFieldsetStyle}>
                    <S.Legend>Senha</S.Legend>
                    <S.Input title={!isPasswordValid ? 'A senha deve conter ao menos 8 caracteres, números e letras' : ''} onChange={(e) => { setPasswordInputValue(e.target.value); }} name="password" type="password" required />
                    <S.Icon src={passwordIcon} alt='ícone de um cadeado' />
                </S.InputFieldSet>


            </S.InputsBox>
        )
    }

    // useEffect validating input values
    useEffect(() => {

        if (emailInputValue.match(/^\S+@\S+\.\S+$/)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
        // user
        if (userInputValue.length >= 4) {
            setIsUserValid(true)

        } else {
            setIsUserValid(false)

        }
        // password
        if (passwordInputValue.length < 8) {
            setIsPasswordValid(false)

        } else if (passwordInputValue.match("^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$")) {
            setIsPasswordValid(true)

        } else {
            setIsPasswordValid(false)

        }
    }, [emailInputValue, userInputValue, passwordInputValue])

    return (
        <S.Div onSubmit={(e) => { e.preventDefault() }}>
            {signupBox()}
            {inputsBox()}
            <Link to={isEmailValid && isUserValid && isPasswordValid ? 'form-success' : ''}><S.SubmitButton onClick={() => { emailErrorBorderStyle(); userErrorBorderStyle(); passwordErrorBorderStyle() }}>Confirmar</S.SubmitButton></Link>
        </S.Div>
    );
}