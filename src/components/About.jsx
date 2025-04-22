import Header from './common/Header'
import Container from './common/Container'
import Title from './common/Title'
import Paragraph from './common/Paragraph'
import Link from './common/Link'
import List from './common/List'

function About() {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'PHP',
        'CodeIgniter 4',
        'jQuery',
    ]

    return <Container >
        <Header />
        <Title level={2} >About me</Title>
        <Link href='./pdf/resume.pdf'
            target='_blank'
        >
            Download my resume
        </Link>
        <Paragraph >I'm a web developer passionate about technology and design. After over 10 years of experience in the hairdressing industry, I decided to pivot my career and follow my passion for programming and creating digital solutions. My journey into web development began with the ISDI Coders bootcamp, where I gained solid experience with technologies like HTML, CSS, JavaScript, React.js, MongoDB, and the MERN stack. Currently, I work as a Frontend Developer and Layout Designer at ACCOM, where I use technologies like PHP, CodeIgniter 4, and jQuery to build attractive and functional user interfaces. In my role, I work closely with the development team to ensure a smooth, interactive, and efficient user experience. My approach to web development is always focused on creating interactive, intuitive, and accessible experiences. I specialize in building single-page applications (SPAs), but I also have experience developing the backend of applications using technologies like Node.js and Express. In addition to my technical background, my experience as a team leader in hairdressing, working with clients and managing projects, has given me great adaptability, organizational skills, and attention to detail, which allows me to have a holistic view of each project I work on. Today, I am looking for new opportunities where I can apply my technical skills, learn new technologies, and continue contributing to the digital world with innovative solutions.</Paragraph>
        <Title level={2}>My key skills include:</Title>
        <List items={skills} className='mt-4' itemClassName='text-pink-500' />
    </Container>
}

export default About