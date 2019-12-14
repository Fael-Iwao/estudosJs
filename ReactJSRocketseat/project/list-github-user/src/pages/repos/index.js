import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Repos extends Component{
    
    state = {
        repositories: [],
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/${id}/repos`);
        console.log(response)
        this.setState({ repositories: response.data });
    }

    render(){
        const { repositories } = this.state;
        return(
            <div className="github-repositories">
                 {repositories.map(repo => (
                    <article key={repo.id} className="github-repo">
                        <h1 className="github-repo-name">{repo.name}</h1>
                        <p  className="github-repo-description">{repo.description}</p>
                        <p> <a href={repo.html_url} rel="noopener noreferrer" className="github-repo-url" target="_blank">{repo.html_url}</a></p>
                    </article>
                ))}


            </div>
        )
        
    }
}