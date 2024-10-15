import FavoriteCharacters from "../../pages/FavoriteCharacters";
import MainPage from "../../pages/MainPage";
import { FAVORITE_CHARACTERS, MAIN_PAGE } from "./utils";

export const publicRoutes = [
    {
        path: MAIN_PAGE,
        Component: MainPage
    },
    {
        path: FAVORITE_CHARACTERS,
        Component: FavoriteCharacters
    },

]