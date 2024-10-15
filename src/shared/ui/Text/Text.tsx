import React from "react";
import styled from "styled-components";

const StyledP = styled.p<PProps>`
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
    font-size: ${({ fontSize }) => fontSize || '18px'};
    font-family: ${({ fontFamily }) => fontFamily || 'SF-PRO-REGULAR'};
    color: ${({ color }) => color || 'balck'};
    margin: ${({ margin }) => margin || '0 0 0 0'};

     &:hover {
        color: ${({ hoverColor }) => hoverColor || 'none'};
    }
`

interface PProps {
    width?: string,
    height?: string,
    fontSize?: string,
    fontFamily?: string,
    color?: string,
    margin?: string;
    hoverColor?: string;
}


const Text: React.FC<PProps & { children: React.ReactNode }> = ({ children, ...props }) => {
    return (
        <>
            <StyledP {...props} >
                {children}
            </StyledP>

        </>
    )
}

export default Text