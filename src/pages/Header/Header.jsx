import {Outlet} from 'react-router-dom'
import { HeaderComponent } from '../../Components'

const Header = () => {
    return (
    <>
        <header>
            <HeaderComponent />
        </header>
        <Outlet />
    </>
        )
}

export default Header