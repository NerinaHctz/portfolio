import { NavLink } from 'react-router-dom'
import Container from './Container'
import Title from './Title'

function Header() {
    const baseStyle = 'px-4 py-2 hover:text-pink-400 transition'
    const activeStyle = 'text-pink-500 font-bold'

    return <Container >
        <h1 className='font-molle'>heeeee</h1>
        <Title level={1} className='font-molle'>
            Nerina Castillo Gómez
        </Title>
        <Container >
            <NavLink to='/' className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                Home
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                Projects
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                About me
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                Contact
            </NavLink>
        </Container>
    </Container>
}

export default Header