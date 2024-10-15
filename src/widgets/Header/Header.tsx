import React from "react";
import styled from "styled-components";
import Button from "../../shared/ui/Button";
import { FAVORITE_CHARACTERS, MAIN_PAGE } from "../../app/routes/utils";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    height:40px;
`

const Header: React.FC = () => {

    const navigate = useNavigate()

    const navigateHandler = (path: string) => {
        navigate(path)
    }

    return (
        <>
            <StyledHeader>
                <Button onClick={() => navigateHandler(MAIN_PAGE)}>
                    Главная
                </Button>
                <Button onClick={() => navigateHandler(FAVORITE_CHARACTERS)}>
                    Любимые герои
                </Button>
            </StyledHeader>
        </>
    )
}

export default Header