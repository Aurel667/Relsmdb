import { useEffect, useState } from "react";

export function useFilmList(section,page = 1){
    const [films, setFilms] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        const fetchFilms = async ()=>{
            try{
                const response = await fetch(`${import.meta.env.VITE_FILMS_API_URL}/movie/${section}?language=en-US&page=${page}`,
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_FILMS_API_KEY}`
                        }
                    }
                )
                const data = await response.json()
                setFilms(data)
                setLoading(false)
            }
            catch(error){
                setError(error)
                setLoading(false)
            }
        }
        fetchFilms()
    },[])
    return [films, loading, error]
}