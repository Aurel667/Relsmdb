import { NavLink } from "react-router-dom";
import { useFilmsContext } from "../../store/FilmsContext";
import { lazy, Suspense } from "react";
import { DataLoader } from "../Loaders/DataLoader";
const FilmItem = lazy(() => import("./FilmItem"));

function FilmsList({error}){
    const { filmsList, page, pagesTotal } = useFilmsContext();
    return (
        <>
            <div className="flex flex-wrap lg:gap-8 md:gap-4 justify-center">
                {error && <p>Something went wrong</p>}
                {filmsList && filmsList.map(film => (
                <NavLink to={`/film/${film.id}`} key={film.id}>
                    <Suspense fallback={<DataLoader/>}>
                        <FilmItem film={film} />
                    </Suspense>
                </NavLink>
            ))}
            </div>
        </>
    )

}
export default FilmsList;