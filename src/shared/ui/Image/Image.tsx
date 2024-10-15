import React from "react";
import styled from "styled-components";

const StyledImage = styled.img<ImageProps>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    object-fit: ${({ objectFit }) => objectFit || 'none'};
    border-radius:  ${({ borderRadius }) => borderRadius || '0px'};
    filter: ${({ filter }) => filter || '0%'};
    background: transparent;
    border-radius: 10px;
`

interface ImageProps {
    src: string,
    width?: string,
    height?: string,
    borderRadius?: string;
    filter?: string;
    objectFit?: string;
}


const Image: React.FC<ImageProps> = ({ src, ...props }) => {
    return (
        <>
            <StyledImage src={src} {...props} />

        </>
    )
}

export default Image