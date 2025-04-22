import ProjectCard from './common/ProjectCard'
import Header from './common/Header'
import Container from './common/Container'
import Title from './common/Title'
import Paragraph from './common/Paragraph'

function Projects() {
    const projects = [
        {
            title: 'Bad Nerves Quiz',
            description: 'Bad Nerves Quiz is an interactive quiz game developed using React, designed for fans of the band Bad Nerves. This project showcases a fun and challenging way for users to test their knowledge about the band\'s history, albums, and other interesting facts.',
            link: 'https://github.com/NerinaHctz/bad-nerves-quiz',
            linkLive: 'https://bad-nerves-quiz.vercel.app/',
            image: './img/bad-nerves.png',
        },
        {
            title: 'Punk Trivia',
            description: 'Punk Trivia is an interactive trivia application that tests your knowledge of punk history and culture. Answer questions about bands, albums, events, and more, and compete for the highest score.',
            link: 'https://github.com/NerinaHctz/punk-trivia',
            linkLive: 'https://punk-trivia.vercel.app/',
            image: './img/punk-trivia.png',
        },
        {
            title: 'Six Degrees of Movies',
            description: 'Six Degrees of Movies is a game where players connect two actors through the movies they have appeared in, based on the concept of "Six Degrees of Separation." The goal is to find the shortest path between two actors by selecting movies and co-stars.',
            link: 'https://github.com/NerinaHctz/six-degrees-of-movies',
            linkLive: 'https://six-degrees-of-movies.vercel.app',
            image: './img/six-degrees.png',
        },
    ]

    return <Container >
        <Header />
        <Title level={2} >Projects</Title>
        <Paragraph >Here you will find all my most recent projects:</Paragraph>
        <Container >
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                />
            ))}
        </Container>
    </Container>
}

export default Projects