import { NavLink } from 'react-router-dom'
import Container from './common/Container'
import Title from './common/Title'

function Home() {
    const baseStyle = 'px-4 py-2 hover:text-pink-400 transition'
    const activeStyle = 'text-pink-500 font-bold'

    return <Container >
        <Title level={1} className='font-molle'>
            Nerina Castillo Gómez
        </Title>
        <Container >
            <Title level={2} >Welcome to my portfolio</Title>

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
    </Container>
}

export default Home