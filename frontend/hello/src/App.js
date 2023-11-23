import Login from './routes/login';
import Signup from './routes/signUp';
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie'
import { Navigate } from 'react-router-dom';

function App() {

  const [cookie, setCookie] = useCookies(['token'])

  return (
    <BrowserRouter>
    {cookie.token?
        (<Routes> 
            <Route path= "/home" element={<h1>HELLO</h1>}/>
            <Route path= "*" element={<Navigate to={'/home'}/>}/>
          </Routes>)
      :(<Routes>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/signup" element={<Signup/>}/>
        <Route path= "*" element={<Navigate to={'/login'}/>}/>
      </Routes>)}
    </BrowserRouter>
  );
}

export default App;
