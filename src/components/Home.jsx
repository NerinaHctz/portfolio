import { NavLink } from 'react-router-dom'
import Container from './common/Container'
import Title from './common/Title'

function Home() {

    return <Container className=''>
        <Container className='flex items-center p-4 bg-gradient-to-b from-black via-[#003e5e] to-black text-gray-300 shadow-md border-b border-gray-300 shadow-b-lg'>
            <img src='/img/perfil.jpg' alt='Profile' className='w-28 h-40 rounded-full border-4 border-[#003e5e]' />
            <Container className='flex flex-col items-center m-auto'>
                <Title level={1} className='text-center text-2xl font-bold m-auto'>
                    Nerina Castillo Gómez
                </Title>
                <Title level={2} className='text-center text-2xl font-bold m-auto'>
                    Full-Stack Developer
                </Title>
            </Container>
        </Container>
        <Container className='flex items-center justify-center p-4 m-auto mt-16 gap-24 flex-wrap'>
            <NavLink to='/projects' className='text-center hover:scale-110 transition-transform duration-300'>
                <img src='/img/projects.jpg' alt='Projects' className='w-48 h-48 border-2 border-[#008ad1] rounded-md shadow-b-lg shadow-md' /> Projects
            </NavLink>
            <NavLink to='/about' className='text-center hover:scale-110 transition-transform duration-300'>
                <img src='/img/about.webp' alt='About Me' className='w-48 h-48 border-2 border-[#e41e03] rounded-md shadow-b-lg shadow-md' /> About me
            </NavLink>
            <NavLink to='/contact' className='text-center hover:scale-110 transition-transform duration-300'>
                <img src='/img/contact.jpg' alt='Contact' className='w-48 h-48 border-2 border-[#aeb6cb] rounded-md shadow-b-lg shadow-md' />  Contact
            </NavLink>
        </Container>
    </Container>
}

export default Home