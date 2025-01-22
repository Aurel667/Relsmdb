import { useEffect, useState } from "react";

export function useFilm(id){
    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        const fetchFilm = async ()=>{
            try{
                const response = await fetch(`${import.meta.env.VITE_FILMS_API_URL}/movie/${id}?language=en-US`,
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_FILMS_API_KEY}`
                        }
                    }
                )
                const data = await response.json()
                setFilm(data)
                setLoading(false)
            }
            catch(error){
                setError(error.message)
                setLoading(false)
            }
        }
        fetchFilm()
    },[])
    return [film, loading, error]
}