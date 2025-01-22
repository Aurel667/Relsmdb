import { useParams } from "react-router-dom"
import { useFilm } from "../../api/useFilm"
import { useEffect, useReducer, useState } from "react"
import { DataLoader } from "../../components/Loaders/DataLoader"
import { ErrorAlert } from "../../components/ErrorFallback/ErrorAlert"

function filmReducer(state, action){
    switch (action.type) {
        case 'SET_GENRES':
            return {...state, genres : action.payload}
        case 'SET_COMPANIES':
            return {...state, companies : action.payload}
        default:
            return state;
    }
}

export function Single (){
    const {filmid} = useParams()
    const [film, loading, error] = useFilm(filmid)
    const [state, dispatch] = useReducer(filmReducer, {
        genres : null,
        companies : null
    })
    useEffect(()=>{
        if(!loading){
            console.log(film )
            dispatch({type : "SET_GENRES", payload : film.genres})
            dispatch({type : "SET_COMPANIES", payload : film.production_companies})
            console.log(state.genres)
        }
    },[loading, film])
    return (
        <>
            {error && <ErrorAlert message={error} />}
            {film &&
            <div className="container">
                <div className="absolute md:ps-2 ps-1 z-0 row brightness-50 bg-black w-screen h-3/5 shadow-md">
                    <img className="lg:ms-1 blur-sm brightness-100" src={`${import.meta.env.VITE_FILMS_IMG_API_URL}${film.backdrop_path}`} alt={film.title} />
                </div>
                <div className="flex flex-wrap gap-6 text-zinc-100 absolute z-10 lg:px-12 p-4 w-full">
                    <div>
                        <img className="rounded-md" src={`${import.meta.env.VITE_FILMS_IMG_API_URL}${film.poster_path}`} alt={film.title} style={{width : "220px", height:"330px"}} />
                    </div>
                    <div className="lg:w-4/5 lg:mt-5">
                        <p className="py-3">
                            {state.genres && state.genres.map(genre => (
                                <span key={genre.id} className="bg-zinc-800 text-zinc-100 shadow-lg p-2 mx-2 rounded-lg">{genre.name}</span>
                            ))} • {film.runtime}m
                        </p>
                        <h1 className="text-3xl font-bold"><span className="font-normal">Title:</span> {film.title}</h1>
                        <h1 className="text-3xl font-bold"><span className="font-normal">Original title:</span> {film.original_title}, <i className="text-base"> {film.tagline} </i> </h1>
                        <p className="text-lg font-bold py-3"><span className="font-normal">Overview:</span> {film.overview}</p>
                        <p className="text-lg font-bold"><span className="font-normal">Release date:</span> {new Date(film.release_date).toDateString()}</p>

                        <p className="text-lg font-bold lg:pt-8"><span className="font-bold">Production companies:</span></p>
                        <div className="flex flex-wrap gap-5">
                            <ul className="list-none list-inside text-md font-bold inline-flex text-gray-100 gap-5 bg-gray-800 p-4 my-3 rounded-lg">
                                
                                {state.companies && state.companies.map(company => (
                                    <li key={company.id} className="grid justify-items-center">
                                        <img className="" src={`${import.meta.env.VITE_FILMS_IMG_API_URL}${company.logo_path}`} alt={company.name} style={{width : "30px", height:"fit"}} />
                                        <span >{company.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-md font-bold items-center flex gap-3 text-gray-100 bg-gray-800 p-4 my-3 rounded-lg w-96">
                                <i class="bi bi-cash-stack"></i> Budjet : {film.budget}$
                                <i class="bi bi-piggy-bank"></i> Revenue : {film.revenue}$
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-full lg:mt-5 flex gap-2 justify-center">
                        
                    </div>
                </div>
            </div>
            
            }
            {loading && <div className="flex justify-center py-4">
                <DataLoader />
            </div>}
        </>
    )
}