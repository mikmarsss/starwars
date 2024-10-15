import { AxiosResponse } from "axios";
import $api from "../http";
import { CharacterResponse } from "../models/CharacterModel";

export default class CharacterService {
    static async fetchCharacters(): Promise<AxiosResponse<CharacterResponse>> {
        return $api.get<CharacterResponse>('/people/')
    }
}