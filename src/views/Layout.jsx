import {Outlet} from 'react-router-dom'
import { Footer } from '../components/Navs/Footer'
import { Header } from '../components/Navs/Header'
import { SearchBar } from '../components/Search/SearchBar'

export function Layout(){
    return(
        <>
            <Header>
                <SearchBar/>
            </Header>
            <Outlet/>
            <Footer />
        </>
    )
}