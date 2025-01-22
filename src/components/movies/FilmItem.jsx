
function FilmItem({film}){
    return (
        <div key={film.id} className="m-4 hover:scale-105 shadow-lg" style={{width: "165px", height : "247.5px"}}>
            <div className="shadow w-full">
                <img className="rounded-md" src={`${import.meta.env.VITE_FILMS_IMG_API_URL}${film.poster_path}`} loading="lazy" alt={film.title} style={{width : "220", height: "330"}}/>
            </div>
            <div className="break-all">
                <h2 className="text-sm font-bold text-center break-all"> {film.adult && <span>🔞</span>}  {film.title}</h2>
            </div>
        </div>
    )
}

export default FilmItem