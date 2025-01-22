import {useEffect, useState} from 'react'

export function useFetch(filters){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch((`http://www.omdbapi.com/?t=${filters.title}&apikey=f246900`));
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData()
    }, [filters])
    return [data, loading, error]
}