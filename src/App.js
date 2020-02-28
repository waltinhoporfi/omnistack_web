//Componente: Bloco isolado de HTML, CSS e JS, que não interfere no resto da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (imutabilidade)
import React, { useState, useEffect } from 'react';
import api from  './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  const [github_username, setGithubusername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState(''); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setLatitude(latitude); 
      setLongitude(longitude);
    },
    (err) =>{
      console.log(err);
    },
    {
      timeout: 30000,
    }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefault();

    const response = await api.post('./devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
    console.log(response.data);
  }

  return (
    
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev} >
          <div className="input-block">
            <label htmlFor="github_username" >Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username} 
              onChange={e => setGithubusername(e.target.value)}  
              />
          </div>

          <div className="input-block">
            <label htmlFor="techs" >Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude" >Latitude</label>
              <input 
                type="number" name="latitude" 
                id="latitude" required 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
              />
            </div>          
            <div className="input-block">
              <label htmlFor="longitude" >Longitude</label>
              <input 
                type="number" name="longitude" 
                id="longitude" required 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37395191?s=400&u=91cc071a12bff518bdaa3a2a88d2c2a63f516b90&v=4" alt="Walter Porfirio" />
              <div className="user-info">
                <strong>Walter Porfirio</strong>
                <span>ReactJS, React NAtive, Node.js</span>
              </div>
            </header>
            <p>Mente barulhenta</p>
            <a href="https://github.com/waltinhoporfi" >Acessar</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37395191?s=400&u=91cc071a12bff518bdaa3a2a88d2c2a63f516b90&v=4" alt="Walter Porfirio" />
              <div className="user-info">
                <strong>Walter Porfirio</strong>
                <span>ReactJS, React NAtive, Node.js</span>
              </div>
            </header>
            <p>Mente barulhenta</p>
            <a href="https://github.com/waltinhoporfi" >Acessar</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37395191?s=400&u=91cc071a12bff518bdaa3a2a88d2c2a63f516b90&v=4" alt="Walter Porfirio" />
              <div className="user-info">
                <strong>Walter Porfirio</strong>
                <span>ReactJS, React NAtive, Node.js</span>
              </div>
            </header>
            <p>Mente barulhenta</p>
            <a href="https://github.com/waltinhoporfi" >Acessar</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/37395191?s=400&u=91cc071a12bff518bdaa3a2a88d2c2a63f516b90&v=4" alt="Walter Porfirio" />
              <div className="user-info">
                <strong>Walter Porfirio</strong>
                <span>ReactJS, React NAtive, Node.js</span>
              </div>
            </header>
            <p>Mente barulhenta</p>
            <a href="https://github.com/waltinhoporfi" >Acessar</a>
          </li>                              
        </ul>
      </main>
    </div>
    
  );
}

export default App;
