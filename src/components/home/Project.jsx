import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const recent_pro =[
  {  name:"Phone Shop",
  description:"Create Admin to manage sales of products, block users, create products,list products in landing page and send emails to users. Login, register, reset password and change password for users.",
  svn_url:"",
  languages:['Reactjs',]
},
  {  name:"Doctor Home",
    description:"Create Admin page to manage to manage all patients and doctors, appointment, reply email of users, login, register.Create Landing page to introduce about application , contact form and list specialist.",
    svn_url:"",
    languages:['Reactjs','Fribase']
  },
    {  name:"Company Project",
    description:"Create Wevsite to introduce UFO , design card and place orders, payment with stripe and manage orders of users, direct by scan card.Create admin page to manage all users, admin, orders, social media and contact.",
    svn_url:"",
    languages:['Nextjs','TypeScript']
  },
    {  name:"Company Project",
    description:"Manage human resource management, departments , jobs of each company. Schedule interviews of candidates and employees of the company.Login , register, confirm email, forgot password, reset password.",
    svn_url:"",
    languages:['Nextjs','TypeScript']
  }
]
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      const response = await axios.get(allReposAPI);
      repoList = [...response.data.slice(0, length)];
     
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
        
          {recent_pro.length
            ? recent_pro.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : recent_pro.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
