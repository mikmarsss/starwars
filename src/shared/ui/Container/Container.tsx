import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div<ContainerProps>`
    display: ${({ display }) => display || "block"};
    position: ${({ position }) => position || "static"};
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
    align-items: ${({ alignItems }) => alignItems || "stretch"};
    padding: ${({ padding }) => padding || "0"};
    margin: ${({ margin }) => margin || "0"};
    background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
    gap: ${({ gap }) => gap || "0px"};
    border-radius: ${({ borderRadius }) => borderRadius || "0px"};
    box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
    flex-wrap: ${({ flexWrap }) => flexWrap || "none"}; 
    top: 0;
    left: 0;
    opacity: ${({ opacity }) => opacity || "1"};
    box-shadow: ${({ boxShadow }) => boxShadow || '0px'};
    border-bottom: ${({ borderBottom }) => borderBottom || '0px'};
    border: ${({ border }) => border || '0px'};
    flex-grow: ${({ flexGrow }) => flexGrow || '0px'};
`

interface ContainerProps {
    display?: string;
    position?: string;
    width?: string;
    height?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    gap?: string;
    borderRadius?: string;
    boxSizing?: string;
    flexWrap?: string;
    opacity?: string;
    boxShadow?: string;
    borderBottom?: string;
    border?: string;
    flexGrow?: string;
}


const Container: React.FC<ContainerProps & { children?: React.ReactNode }> = ({ children, ...props }) => {
    return (
        <>
            <StyledContainer {...props} >
                {children}
            </StyledContainer>

        </>
    )
}

export default Container