import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { styled } from 'goober'

const Intro = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 167px 0 167px;
  gap: 40px;

  h1 {
    font-size: 40px;
    line-height: 47px;
    margin: 0;
    margin-bottom: 29px;
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 23,4px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  img {
    border: 3px solid #fff;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`

const Home = () => {
  const [homepage, setHomepage] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImageAlt, setFeaturedImageAlt] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/~szymon/lapa/wordpress/wp-json/wp/v2/pages/30')
      .then((response) => {
        setHomepage(response.data)

        axios.get('http://localhost/~szymon/lapa/wordpress/wp-json/wp/v2/media/' + response.data.featured_media)
          .then(response => {
            setFeaturedImage(response.data.media_details.sizes.full.source_url)
            setFeaturedImageAlt(response.data.alt_text);
          })
          .catch(error => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <Intro>
        <article>
          {homepage && parse(homepage.content.rendered)}
        </article>
        {featuredImage && <img src={featuredImage} alt={featuredImageAlt} />}
      </Intro>
    </>
  )
}

export default Home