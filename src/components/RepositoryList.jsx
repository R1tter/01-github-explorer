import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';


const repository = {
  name: 'R1tter',
  description: 'Academical applications',
  link: 'https://github.com/R1tter'

}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/R1tter/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);
  
  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Ritter's Profile</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}