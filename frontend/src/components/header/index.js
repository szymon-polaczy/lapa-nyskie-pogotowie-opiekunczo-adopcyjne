import React from 'react'
import { styled } from 'goober'

const StyledHeader = styled('header')`
  width: 100%;
  max-width: 368px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 37px 39px;
  background: #fff;
  text-align: center;
  color: #000;
`

const Menu = styled('nav')`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 59px;
  margin-top: 51px;

  a {
    color: #000;
    text-decoration: none;
    font-size: 24px;

    &:not(:first-child) {
      margin-top: 21px;
    }
  }
`

const Info = styled('article')`
  font-size: 18px;
  text-align: left;
`

const Socials = styled('article')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  div:not(:first-child) {
    margin-left: 18px;
  }
`

const Header = ({links, logo, info, socials}) => {
  return (
    <StyledHeader data-testid="header">
      <article data-testid="header--logo">
        {(logo && logo.acf.logo) && <img src={logo.acf.logo.sizes.medium} alt={logo.acf.logo.alt}/> }
      </article>

      <Menu>
        {links && links.map(({post_name, title}) => (
          <a href={post_name} key={post_name} title={title}>{title}</a>
        ))}
      </Menu>
      
      <Info data-testid="header--info">
        {info &&
          <div dangerouslySetInnerHTML={{__html: info.acf.menu_dodatkowe_informacje}}></div>
        }
      </Info> 

      <Socials data-testid="header--socials">
        {(socials && socials.acf.socials) && socials.acf.socials.map(({icon, link}, index) => (
          <div key={`header-socials-${index}`}>
            {(link && icon.sizes) && 
              <a href={link} title={icon.alt} key={icon.alt} target="_blank" rel="noreferrer">
                <img src={icon.sizes.header_icon} alt={icon.alt} />
              </a>
            }
          </div>
        ))}
      </Socials>
    </StyledHeader>
  )
}

export default Header