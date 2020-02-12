//Componente: Bloco isolado de HTML, CSS e JS, que não interfere no resto da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (imutabilidade)
import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username" >Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs" >Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude" >Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>          
            <div className="input-block">
              <label htmlFor="longitude" >Longitude</label>
              <input name="longitude" id="longitude" required />
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
