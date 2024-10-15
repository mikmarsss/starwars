import React, { useEffect, useState } from "react";
import { CharacterModel } from "../app/models/CharacterModel";
import CharactersBlock from "../widgets/CharactersBlock";
import Container from "../shared/ui/Container";
import Button from "../shared/ui/Button";

const FavoriteCharacters: React.FC = () => {

    const [favoriteCharacters, setFavoriteCharacters] = useState<CharacterModel[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        loadFavorites()
    }, [])

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

    const charactersPerPage = 5;
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = favoriteCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <>
            <CharactersBlock characters={favoriteCharacters} />
            {
                favoriteCharacters.length !== 0 &&
                <Container display="flex" gap="20px">
                    <Button onClick={prevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <Button onClick={nextPage} disabled={indexOfLastCharacter >= favoriteCharacters.length}>
                        Next
                    </Button>
                </Container>
            }
        </>
    )
}

export default FavoriteCharacters