import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
    width: 600px;
    height:50px;
    padding: 5px;
    box-sizing: border-box;
    border: solid #FFC500 1px;
    border-radius: 10px;
    background-color: transparent;
    color: #FFC500;
    font-size: 24px;
    &:focus{
        outline: none;
    }
`

interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ onChange }) => {
    return (
        <>
            <StyledInput onChange={onChange} placeholder="Найдите вашего героя" />
        </>
    )
}

export default Input