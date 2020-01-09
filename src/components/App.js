import React from 'react'
import Login from './Auth/Login'
import Chat from './Chat/Chat'
import { BrowserRouter , Route, Link} from 'react-router-dom'



const App = () => {

    return(
      <section id="App">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Login</Link>
            </li>
            <li>
              <Link to='/Chat'>Chat</Link>
            </li>
          </ul>
          <Route  exact path="/" component={Login} />
          <Route path="/Chat" component={Chat} />
      
        </div>  


      </BrowserRouter>
        
       
    </section>
    )

}
export default App;
