import React from 'react';

const Movie = (props) => {
  const { title, deadline, description, onMouseEnter, onMouseLeave, hoveredMovie } = props;

  // Map deadlines to image paths using relative paths
  const imagePaths = {
    Smile: require('../images/smile.png'),         // Use relative paths
    GrownUps: require('../images/grownups.png'), // Use relative paths
    Notebook: require('../images/notebook.png')     // Use relative paths
  };

  return (
    <div
      className="card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h2>{title}</h2>
      <div className="preview-text">
        {hoveredMovie === title && (
          <>
            <p>{description}</p>
            <img src={imagePaths[deadline]} alt={deadline} />
          </>
        )}
      </div>
      <div>
        <p>Title of Movie: {deadline}</p>
      </div>
    </div>
  );
}

export default Movie;
