import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: "Bearer 52c204e0a99a1f6c99e2f1b19a1a56bc8a6796b7"
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "saadpasta") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })
      .then(result => {
        setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
    </div>
  );
}
