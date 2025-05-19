import Header from './common/Header'
import Container from './common/Container'
import Title from './common/Title'
import Paragraph from './common/Paragraph'
import Link from './common/Link'
import Image from './common/Image'

function About() {
    const skills = [
        { name: 'HTML', logo: './img/icon/html.png' },
        { name: 'CSS', logo: './img/icon/css.png' },
        { name: 'JavaScript', logo: './img/icon/js.png' },
        { name: 'React.js', logo: './img/icon/react.png' },
        { name: 'Node.js', logo: './img/icon/node.png' },
        { name: 'Express.js', logo: './img/icon/express.png' },
        { name: 'MongoDB', logo: './img/icon/mongo.png' },
        { name: 'Tailwind CSS', logo: './img/icon/tailwind.png' },
        { name: 'PHP', logo: './img/icon/php.png' },
        { name: 'CodeIgniter 4', logo: './img/icon/ci.png' },
        { name: 'jQuery', logo: './img/icon/jquery.png' },
        { name: 'Figma', logo: './img/icon/figma.png' },
        { name: 'GitHub', logo: './img/icon/github.png' },
        { name: 'VS Code', logo: './img/icon/vsc.png' },
    ]

    return <Container >
        <Header />
        <Container className='p-8 m-auto mt-8 mb-24'>
            <Title level={2} className='mb-3'>About me</Title>
            <Link href='./pdf/resume.pdf'
                target='_blank'
            >
                Download my resume
            </Link>
            <Paragraph className='mb-3 mt-3'>I'm a web developer passionate about technology and design. After over 10 years of experience in the hairdressing industry, I decided to pivot my career and follow my passion for programming and creating digital solutions. My journey into web development began with the ISDI Coders bootcamp, where I gained solid experience with technologies like HTML, CSS, JavaScript, React.js, MongoDB, and the MERN stack. Currently, I work as a Frontend Developer and Layout Designer at ACCOM, where I use technologies like PHP, CodeIgniter 4, and jQuery to build attractive and functional user interfaces. In my role, I work closely with the development team to ensure a smooth, interactive, and efficient user experience. My approach to web development is always focused on creating interactive, intuitive, and accessible experiences. I specialize in building single-page applications (SPAs), but I also have experience developing the backend of applications using technologies like Node.js and Express. In addition to my technical background, my experience as a team leader in hairdressing, working with clients and managing projects, has given me great adaptability, organizational skills, and attention to detail, which allows me to have a holistic view of each project I work on. Today, I am looking for new opportunities where I can apply my technical skills, learn new technologies, and continue contributing to the digital world with innovative solutions.</Paragraph>
            <Title level={2} className='mt-5'>My key skills include:</Title>
            <Container className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6'>
                {skills.map((skill, index) => (
                    <Container key={index} className='flex flex-col items-center'>
                        <Image
                            src={skill.logo}
                            alt={skill.name}
                            className='w-12 h-12 object-contain bg-white p-2 rounded-md shadow-md'
                        />
                        <Container className=' mt-2'>{skill.name}</Container>
                    </Container>
                ))}
            </Container>
        </Container>
    </Container>
}

export default About