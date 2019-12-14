import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component{
    state = {
        login: 'Fael-Iwao',
        name: 'Fael Iwao',
        html_url: 'https://github.com/Fael-Iwao',
        avatar_url: 'https://avatars3.githubusercontent.com/u/39377391?s=460&v=4',
        public_repos: 4,
        bio: 'Desenvolvedor de software, entusiasta em Docker, python, Big Data entre outras tecnologias.',
        status: true

    }
    componentDidMount(){
        this.loadUser();
    }

     
    loadUser = async (user) => {

        if(user === undefined) return;
        try{
            
            const response = await api.get(`/${user}`);
            const { login, name, html_url, avatar_url, public_repos, bio } = response.data;
            this.setState({
                login,
                name,
                html_url,
                avatar_url,
                public_repos,
                bio,
                status: true
            });

        }catch(error){
            
            this.setState({status: false});
        }
        
        
    };

    findUser = () => {
        
        const input = document.querySelector('input').value;
        if(input === '') return alert('Preencha usuario');
        this.loadUser(input);
    }


    render(){
        const { login, name, html_url, avatar_url, public_repos, bio, status } = this.state;
        return (
            <div className="github-user">
                 <div className="search-box">
                    <input className="search-input" id="name"  type="text"  />
                    <button onClick={() => this.findUser()} className="search-button">Pesquisar</button>

                </div>
               
                <article hidden={status === false} className="content">
                    <div className="container-img">
                        <img className="github-img" alt="avatar_github" src={avatar_url} />
                        <h1 className="github-name">{name}</h1>
                    </div>
                    <div className="container-info">
                        <h3 className="github-login">{login}</h3>
                        <p> URL: <a className="github-url" rel="noopener noreferrer" target="_blank" href={html_url}>{html_url}</a>.</p>
                        <p> {bio}</p>
                        <p>Repositórios publicos: {public_repos}</p>
                        <div className="footer-content" hidden={public_repos === 0}>
                            <Link to={`/repos/${login}`} className="github-button">Acessar Repositórios</Link>
                        </div>
                    </div>
                    
                </article>
                <article hidden={status === true} className="content">
                    <h1>No user found.</h1>
                    
                </article>
                
            </div>
           
        )
    }
}

