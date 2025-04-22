import Container from './Container'
import Title from './Title'
import Paragraph from './Paragraph'
import Link from './Link'
import Image from './Image'

function ProjectCard({ title, description, link, image }) {
    return <Container >
        <Image src={image} alt={title} className='w-full h-56 object-cover' />
        <Container >
            <Title level={3} >{title}</Title>
            <Paragraph >{description}</Paragraph>
            <Link
                href={link}
                target='_blank'
            >
                see more
            </Link>
        </Container>
    </Container>
}

export default ProjectCard