export interface CharacterModel {
    name: string;
    homeworld: string;
    homeworldName: string;
    url: string;
}

export interface CharacterResponse {
    results: CharacterModel[];
}