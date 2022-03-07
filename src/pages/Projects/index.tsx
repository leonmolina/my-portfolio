import { Container } from 'react-bootstrap';
import './style.css';
import Project from '../../components/partials/Project';
import { useEffect, useState } from 'react';

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
		const pList = [
			{
				image : './images/olxclone.png',
				title: 'OLX Clone B7',
				subtitle: 'Bla bla bla bla bla bla bla bla bla bla bla',
				used: ['React', 'Bootstrap'],
				socials: {
					github: 'https://github.com/leonmolina/projeto-olx',
					link: 'https://github.com/leonmolina/projeto-olx'
				}
			},
			{
				image : './images/olxclone.png',
				title: 'OLX Clone B7',
				subtitle: 'Bla bla bla bla bla bla bla bla bla bla bla',
				used: ['React', 'Bootstrap'],
				socials: {
					github: 'https://github.com/leonmolina/projeto-olx',
					link: 'https://github.com/leonmolina/projeto-olx'
				}
			},
			{
				image : './images/olxclone.png',
				title: 'OLX Clone B7',
				subtitle: 'Bla bla bla bla bla bla bla bla bla bla bla',
				used: ['React', 'Bootstrap'],
				socials: {
					github: 'https://github.com/leonmolina/projeto-olx',
					link: 'https://github.com/leonmolina/projeto-olx'
				}
			},
			{
				image : './images/olxclone.png',
				title: 'OLX Clone B7',
				subtitle: 'Bla bla bla bla bla bla bla bla bla bla bla',
				used: ['React', 'Bootstrap'],
				socials: {
					github: 'https://github.com/leonmolina/projeto-olx',
					link: 'https://github.com/leonmolina/projeto-olx'
				}
			}
		];
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