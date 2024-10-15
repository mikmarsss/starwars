import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Image from "../Image";
import { CharacterModel } from "../../../app/models/CharacterModel";
import Text from "../Text";
import axios from "axios";
import heart from '../../../assets/images/heart.svg'
import fillHeart from '../../../assets/images/fillHeart.svg'

const StyledCharacter = styled.div`
    width: 500px;
    height: 150px;
    border: solid rgb(255, 232, 31) 1px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    border-radius: 15px;
    gap: 20px;
`

interface CharacterProps {
    character: CharacterModel
}

const Character: React.FC<CharacterProps> = ({ character }) => {

    const [homeworld, setHomeWorld] = useState('')
    const [characterId, setCharacterId] = useState('')
    const [favoriteCharacters, setFavoriteCharacters] = useState<CharacterModel[]>([]);

    useEffect(() => {
        getHomeworldName(character.homeworld)
    }, [character.homeworld]);

    useEffect(() => {
        setCharacterId(extractIdFromUrl(character.url))
        loadFavorites()
    }, [])


    const getHomeworldName = async (url: string) => {
        try {
            const response = await axios.get<{ name: string }>(url);
            const worldname = response.data.name
            setHomeWorld(worldname)
        } catch (e) {
            console.log(e)
            setHomeWorld('')
        }
    }


    const extractIdFromUrl = (url: string): string => {
        const parts = url.split('/');
        return parts[parts.length - 2];
    };

    const saveToFavorites = (character: CharacterModel) => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const isFavorite = favorites.some((favChar: CharacterModel) => favChar.name === character.name);
        let updatedFavorites;
        if (isFavorite) {
            updatedFavorites = favorites.filter((favChar: CharacterModel) => favChar.name !== character.name);
        } else {
            updatedFavorites = [...favorites, character];
        }
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavoriteCharacters(updatedFavorites);
    };

    const loadFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavoriteCharacters(favorites);
    };


    return (
        <>
            <StyledCharacter>
                {/* <Image /> */}
                <Container>
                    <Image width="130px" height="130px" objectFit="fill" src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} />
                </Container>
                <Container display="flex" flexDirection="column" justifyContent="space-between">
                    <Container>
                        <Text color="#FFE81F" fontSize="20px">
                            Имя
                        </Text>
                        <Text color="white" fontSize="24px">
                            {character.name}
                        </Text>
                    </Container>
                    <Container>
                        <Text color="#FFE81F" fontSize="20px">
                            Место рождения
                        </Text>
                        <Text color="white" fontSize="24px">
                            {homeworld}
                        </Text>
                    </Container>
                </Container>
                <Container width='26px' height='26px' margin="0 0 0 auto">
                    <button style={{ width: '26px', height: '26px' }} onClick={() => saveToFavorites(character)}>
                        {
                            favoriteCharacters.some(favChar => favChar.name === character.name) &&
                            <Image src={fillHeart} />
                        }
                        {
                            !favoriteCharacters.some(favChar => favChar.name === character.name) &&
                            <Image src={heart} />
                        }
                    </button>
                </Container>

            </StyledCharacter>

        </>
    )
}

export default Character