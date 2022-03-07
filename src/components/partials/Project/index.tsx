import { Button } from 'react-bootstrap';
import './style.css';
import olxclone from './images/olxclone.png';

type ProjectItem = {
    data: {
        image: string,
        title: string,
        subtitle: string,
        used: string[],
        socials: {
            github: string,
            link: string
        }
    }
}

const Project = (props: ProjectItem) => {

    // GB
    let olximg = olxclone
    let img = '';
    if(props.data.image === './images/olxclone.png') {
        img = olximg
    } else {
        img = 'IMG NOT FOUND'
    }

    return (
        <div className="project">
            <div className="project-content">
                <div className="project-content--image">
                    <a href="https://github.com/leonmolina/projeto-olx">
                        <img src={`${img}`} alt={`Imagem do projeto ${props.data.title} `}/>
                    </a>
                </div>
                <div className="project-content--description">
                    <p>{props.data.subtitle}</p>
                    <ul>
                        {props.data.used.map((i, k) =>
                            <li key={k}>{i}</li>
                        )}
                    </ul>
                    <div className="content-description--buttons">
                        <Button>Github</Button>
                        <Button>Projeto</Button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Project;