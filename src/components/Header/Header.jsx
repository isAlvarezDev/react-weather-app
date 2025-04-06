import '../../styles/components/Header.scss'
import { Place, Search, Settings } from './'
export const Header = () => {
    return <header className='Header'>
        <Place />
        <Search />
        <Settings />
    </header>
}
