import Header from './components/header'
import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {
  const [links, setLinks] = useState(null);
  const [logo, setLogo] = useState(null);
  const [info, setInfo] = useState(null);
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/~szymon/lapa/wordpress/wp-json/wp/v2/menu')
      .then((response) => {
        setLinks(response.data)
      })
      .catch((error) => {
        console.error(error)
      })

    axios.get('http://localhost/~szymon/lapa/wordpress/wp-json/acf/v3/options/options')
      .then((response) => {
        setLogo(response.data)
        setInfo(response.data)
        setSocials(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {links && <Header links={links} logo={logo} info={info} socials={socials}/>}
      </header>
    </div>
  );
}

export default App;
