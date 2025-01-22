import { useEffect, lazy, Suspense } from "react"
import { useFilmList } from "../../api/useFilmsList"
import { useFilmsContext } from "../../store/FilmsContext"
import { DataLoader } from "../Loaders/DataLoader"
const FilmsList = lazy(()=>import("./FilmsList"))


export function FilmSection({section, title}){
    const [films, loading, error] = useFilmList(section)
    const { dispatch } = useFilmsContext()
    useEffect(()=>{
        if(!loading){
            if(films){
                dispatch({type : 'SET_FILMS', payload : films.results})
                dispatch({type : 'SET_PAGE', payload : films.page})
                dispatch({type : 'SET_PAGE_TOTAL', payload: films.total_pages})
            }
        }
    }, [loading, films, dispatch])
    return (
        <>
            <div className="px-12 py-5">
                <h2 class="lg:text-4xl md:text-4xl ms-3 font-bold mb-5">{title} {">"} </h2>
                <Suspense fallback={<DataLoader/>}>
                    <FilmsList error={error} />
                </Suspense>
            </div>
        </>
    )
}