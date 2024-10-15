import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 230px;
    height: 30px;
    border: solid #FFE81F 1px;
    color:#FFE81F;
    font-size: 24px;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        border: solid #a19d21 1px;
        color: #a19d21;
    }

    &:disabled {
        border: solid #888 1px;
        color: #888;
        cursor: not-allowed;
    }
`

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
    return (
        <>
            <StyledButton onClick={onClick} disabled={disabled}>
                {children}
            </StyledButton>
        </>
    )
}

export default Button