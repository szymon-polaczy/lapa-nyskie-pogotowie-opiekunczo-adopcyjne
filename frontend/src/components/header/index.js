import React from 'react'

const Header = ({links, logo, info, socials}) => {
  return (
    <header data-testid="header">
      <article data-testid="header--logo">
        {(logo && logo.acf.logo) && <img src={logo.acf.logo.sizes.medium} alt={logo.acf.logo.alt}/> }
      </article>

      <nav>
        {links && links.map(({post_name, title}) => (
          <a href={post_name} key={post_name} title={title}>{title}</a>
        ))}
      </nav>
      
      <article data-testid="header--info">
        {info &&
          <div dangerouslySetInnerHTML={{__html: info.acf.menu_dodatkowe_informacje}}></div>
        }
      </article> 

      <article data-testid="header--socials">
        {(socials && socials.acf.socials) && socials.acf.socials.map(({icon, link}, index) => (
          <div key={`header-socials-${index}`}>
            {(link && icon.sizes) && 
              <a href={link} title={icon.alt} key={icon.alt}>
                <img src={icon.sizes.header_icon} alt={icon.alt} />
              </a>
            }
          </div>
        ))}
      </article>
    </header>
  )
}

export default Header