import Container from './Container'
import Title from './Title'
import Paragraph from './Paragraph'
import Link from './Link'
import Image from './Image'

function ProjectCard({ title, description, link, image, linkLive }) {
    return <Container className='flex items-center gap-4'>
        <Image src={image} alt={title} className='max-w-40 h-45 rounded-md border border-gray-200' />
        <Container className='flex flex-col justify-start gap-3'>
            <Title level={3} >{title}</Title>
            <Paragraph className='leading-6'>{description}</Paragraph>
            <Container className='flex flex-col'>
                <Link
                    href={linkLive}
                    target='_blank'
                >
                    Play here!
                </Link>
                <Link
                    href={link}
                    target='_blank'
                >
                    Check code in GitHub
                </Link>
            </Container>
        </Container>
    </Container>
}

export default ProjectCard