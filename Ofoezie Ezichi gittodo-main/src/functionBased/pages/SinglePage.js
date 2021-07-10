import React from 'react'
import { useParams } from "react-router-dom";

const SinglePage = () => {

  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description:
        "This is a to do app that helps you keep track of your daily activities.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        "she is an enthusiatic beginner.",
    },
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find(item => item.slug === slug);
  const { title, description } = aboutContent

  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export default SinglePage
