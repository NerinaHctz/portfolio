import Header from './common/Header'
import Container from './common/Container'
import Title from './common/Title'
import Paragraph from './common/Paragraph'
import Link from './common/Link'

function Contact() {
    return <Container className='text-center'>
        <Header />
        <Title level={2} className='text-3xl font-bold text-green-400'>Contact</Title>
        <Paragraph className='mt-4 text-lg'>Let's talk!</Paragraph>
        <Container className='mt-6'>
            <Link
                href='tel:+34665876551'
                className='block text-lg text-blue-400 hover:text-blue-300'>
                +34 665 87 65 51
            </Link>
            <Link
                href='mailto:nerina.cgomez@gmail.com'
                className='block text-lg text-blue-400 hover:text-blue-300'>
                nerina.cgomez@gmail.com
            </Link>
            <Link
                href='https://www.linkedin.com/in/nerina-castillo/'
                target='_blank'
                className='block text-lg text-blue-400 hover:text-blue-300'>
                LinkedIn
            </Link>
        </Container>
    </Container>
}

export default Contact