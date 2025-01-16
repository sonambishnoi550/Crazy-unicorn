import React from 'react'

const CustomHeading = ({ text, classStyle }) => {
  return (
    <h2
      className={`lg: text-custom-8xl text-5xl text-center font-normal uppercase font-pinky ${classStyle}
`}>
      {text}</h2 >
  );
};

export default CustomHeading
