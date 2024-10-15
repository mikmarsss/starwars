import React from "react";
import styled from "styled-components";
import { CharacterModel } from "../../app/models/CharacterModel";
import Character from "../../shared/ui/Character";

const StyledCharactersBlock = styled.div`
    width: 1200px;
    min-height: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
`

interface CharacterProps {
    characters: CharacterModel[]
}


const CharactersBlock: React.FC<CharacterProps> = ({ characters }) => {
    return (
        <>
            <StyledCharactersBlock>
                {
                    characters.map((item, index) => (
                        <Character key={item.name} character={item} />
                    ))
                }
            </StyledCharactersBlock>
        </>
    )
}

export default CharactersBlock