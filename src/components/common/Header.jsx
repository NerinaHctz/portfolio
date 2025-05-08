import { NavLink } from 'react-router-dom'
import Container from './Container'
import Title from './Title'

function Header() {
    const baseStyle = ''
    const activeStyle = ''

    return <Container className=''>
        <Container className='flex items-center p-4 bg-gradient-to-b from-black via-[#003e5e] to-black text-gray-300 shadow-md border-b border-gray-300 shadow-b-lg'>
            <img src='/img/perfil.jpg' alt='Profile' className='w-28 h-40 rounded-full border-4 border-[#003e5e]' />
            <Title level={1} className='text-center text-2xl font-bold m-auto'>
                Nerina Castillo Gómez
            </Title>
        </Container>
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