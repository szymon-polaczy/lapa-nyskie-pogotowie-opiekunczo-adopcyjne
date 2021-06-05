import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { styled } from 'goober'

const Intro = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 167px 0 167px;
  gap: 38px;

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

const Animals = styled('section')`
  padding: 95px 167px 0 167px;
  text-align: center;

  h2, h3, p {
    margin: 0;
  }

  h2 {
    font-size: 40px;
    line-height: 130%;
    margin-bottom: 20px;
  }

  small {
    font-size: 18px;
    line-height: 23.4px;
    max-width: 793px;
    margin: 0 auto;
    display: block;
  }

  .gatunki {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 38px;

    h2 {
      border: 3px solid #fff;
      width: min-content;
      display: block;
      padding: 4px 11px;
      margin: 44px auto 35px auto;
      font-size: 36px;
      line-height: 130%;
    }

    h3 {
      margin: 21px 0 11px 0;
      font-size: 30px;
      line-height: 130%;
    }

    p {
      font-size: 18px;
      line-height: 23.4px;
    }
  }

  .info {
    margin-bottom: 150px;

    h3 {
      margin: 47px 0 11px 0;
      font-size: 30px;
      line-height: 130%;
    }

    p {
      font-size: 18px;
      line-height: 23.4px;
      max-width: 793px;
      margin: 0 auto;
      display: block;
    }
  }
`

const Home = () => {
  const [homepage, setHomepage] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImageAlt, setFeaturedImageAlt] = useState(null);
  const [acf, setAcf] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/~szymon/lapa/wordpress/wp-json/wp/v2/pages/30')
      .then((response) => {
        setHomepage(response.data)
        setAcf(response.data.acf);

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

      { acf &&
        <Animals>
          <h2>{acf.naglowek}</h2>
          <small>{acf.krotki_opis}</small>
          <section className="gatunki">
            {acf.gatunek.map(gatunek => (
              <article key={gatunek.nazwa}>
                <h2>{gatunek.nazwa}</h2>
                {parse(gatunek.co_zrobic)}
              </article>
            ))}
          </section>
          <div className="info">{parse(acf.dodatkowe_informacje)}</div>
        </Animals>
      }
    </>
  )
}

export default Home