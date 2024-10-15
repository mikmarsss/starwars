import React, { useEffect, useState } from "react";
import Button from "../shared/ui/Button";
import CharactersBlock from "../widgets/CharactersBlock";
import characterStore, { AppDispatch, RootState } from "../app/store/characterStore";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/characterSlice";
import Input from "../shared/ui/Input";
import { CharacterModel } from "../app/models/CharacterModel";
import Container from "../shared/ui/Container";

const MainPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const characters = useSelector((state: RootState) => state.data.items);

    const [filteredCharacters, setFilteredCharacters] = useState<CharacterModel[]>([])
    const [isSerch, setIsSerch] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    const charactersPerPage = 5;
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const finderHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let pattern = e.target.value.toLowerCase();
        let result = characters.filter(char => {
            const words = char.name.toLowerCase().split(' ');
            return words.some(word => word.startsWith(pattern));
        });
        setFilteredCharacters(result);
        if (e.target.value.length !== 0) {
            setIsSerch(true)
        } else {
            setIsSerch(false)
        }
    }


    return (
        <>
            <Input onChange={finderHadler} />
            {
                !isSerch &&
                <CharactersBlock characters={currentCharacters} />
            }

            {
                isSerch &&
                <CharactersBlock characters={filteredCharacters} />
            }
            <Container display="flex" gap="20px">
                <Button onClick={prevPage} disabled={currentPage === 1}>
                    Предыдущая
                </Button>
                <Button onClick={nextPage} disabled={(indexOfLastCharacter >= characters.length) || (indexOfLastCharacter >= filteredCharacters.length && isSerch)}>
                    Следующая
                </Button>
            </Container>

        </>
    )
}

export default MainPage