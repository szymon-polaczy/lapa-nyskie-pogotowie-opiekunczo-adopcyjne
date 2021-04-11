import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Header from '../index'

describe('Header', () => {
  it('renders', () => {
    render(<Header/>)
  })

  it('renders links', () => {
    const test_menu = [
      {
        post_name: 'strona-glowna',
        title: 'Strona Główna'
      },
      {
        post_name: 'o-nas',
        title: 'O Nas'
      }
    ];

    const { getByTestId } = render(<Header links={test_menu} />)
    expect(getByTestId('header')).toHaveTextContent('Strona Główna')
    expect(getByTestId('header')).toHaveTextContent('O Nas')
  })

  it ('renders logo', () => {
    const logo = {
      acf: {
        logo: {
          alt: 'Łapa',
          sizes: {
            medium: 'https://via.placeholder.com/252x252'
          }
        }
      }
    };

    const { getByTestId } = render(<Header logo={logo}/>);
    expect(getByTestId('header--logo')).not.toBeEmptyDOMElement();
  })

  it ('renders additional info', () => {
    const info = {
      acf: {
        menu_dodatkowe_informacje: "Test Info"
      }
    };

    const { getByTestId } = render(<Header info={info} />)
    expect(getByTestId('header--info')).toHaveTextContent('Test Info')
  })

  it ('renders social icons', () => {
    const socials = {
      acf: {
        socials: [
          {
            icon: {
              alt: 'Łapa',
              sizes: {
                'header_icon': 'https://via.placeholder.com/43x43'
              }
            },
            link: 'https://google.com'
          }
        ]
      }
    };

    const { getByTestId } = render(<Header socials={socials} />)
    expect(getByTestId('header--socials')).not.toBeEmptyDOMElement()
  })
})