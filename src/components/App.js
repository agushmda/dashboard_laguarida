import React from 'react'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Content from './Content';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <div id='wrapper'>
        <Sidebar />
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Header />
                    <Content />
                    <Footer />
            </div>  
          </div>
      </div>
    </React.Fragment>
  )
}

export default App;
