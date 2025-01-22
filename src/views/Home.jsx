import { FilmSection } from "../components/movies/FilmSection"


export function Home(){
    return (
        <>
            <FilmSection section="top_rated" title="Films populaires"/>
            <FilmSection section="now_playing" title="En salles"/>
            <FilmSection section="upcoming" title="À venir"/>

        </>
    )
}