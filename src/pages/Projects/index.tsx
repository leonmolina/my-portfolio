import { Container } from 'react-bootstrap';
import './style.css';
import Project from '../../components/partials/Project';
import { useEffect, useState } from 'react';
import allProjectsList from '../../helpers/ProjectsList';

const Projects = () => {
	type Project = {
		image: string,
		title: string,
		subtitle: string,
		used: string[],
		socials: {
			github: string,
			link: string
		}
	}
	const [projectList, setProjectList] = useState<Project[]>([]);

	useEffect(()=>{
		const pList = allProjectsList;
		setProjectList(pList);
	}, [])

	return (
		<main>
			<Container>
				<section className='main-section--projects'>
					{projectList.map((i, k) =>
						<Project data={i} key={k} />
					)}
				</section>
			</Container>
		</main>
	);
}

export default Projects;