import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";


const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    languages,
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          <hr />
          {languages ? (
            <Language languages={languages}  />
          ) : (
            <Skeleton count={3} />
          )}
         
        </Card.Body>
      </Card>
    </Col>
  );
};


const Language = ({ languages}) => {
  
  return (
    <div className="pb-3">
      Languages:{" "}
      {(languages ||[]).length
        ? languages.map((language,index) => (
          <a
            key={index}
            className="card-link"
            rel="noopener noreferrer"
          >
            <span className="badge bg-light text-dark">
              {language}
            </span>
          </a>

        ))
        : "code yet to be deployed."}
    </div>
  );
};

export default ProjectCard;
