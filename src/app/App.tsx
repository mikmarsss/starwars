import React from 'react';
import './styles/global.css'
import MainPage from '../pages/MainPage';
import Header from '../widgets/Header';
import logo from '../assets/images/logo.svg'
import Image from '../shared/ui/Image';
import characterStore from './store/characterStore';
import { Provider } from 'react-redux';
import background from '../assets/images/StarsBackground.svg'
import { publicRoutes } from './routes/routes';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Provider store={characterStore}>
      <div style={{ minHeight: '100vh', height: 'auto', display: 'flex', flexDirection: 'column', backgroundImage: `url(${background})` }}>
        <div>
          <Header />
        </div>
        <div style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0)', margin: '50px 0 0 0' }}>
          <Image src={logo} width='400px' objectFit='fill' />
        </div>
        <div style={{ flexGrow: '1', display: 'flex', gap: '30px', flexDirection: 'column', alignItems: 'center', margin: '200px 0 0 0' }}>
          <Routes>
            {
              publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} Component={Component} />
              ))
            }
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
