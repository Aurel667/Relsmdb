import { createContext, useContext, useReducer } from "react";

const FilmsContext = createContext({})

const FilmsReducer = (state, action) =>{
    switch(action.type){
        case 'SET_FILMS':
            // console.log("Liste des films definie " + action.payload)
            return {...state, filmsList: action.payload};
        case 'SET_PAGE':
            // console.log("Page actuelle " + action.payload)
            return { ...state, page : action.payload }
        case 'SET_PAGE_TOTAL':
            // console.log("nombre pages totales " + action.payload)
            return { ...state, pagesTotal : action.payload }
        case 'SET_FILTERS':
            return { ...state, filters : action.payload}
        default:
            return state
    }
}

export function FilmsContextProvider({children}){
    const [state, dispatch] = useReducer(FilmsReducer, {
        filmsList: '',
        filters : {
            genre: '',
            rating: '',
            year: ''
        },
        page : 1,
        pagesTotal : 1
    })
    return(
        <FilmsContext.Provider value={{
            filmsList: state.filmsList,
            filters : state.filters,
            page : state.page,
            pagesTotal : state.pagesTotal,
            dispatch : dispatch
        }}>
            {children}
        </FilmsContext.Provider>
    )
}

export function useFilmsContext(){
    return useContext(FilmsContext)
}