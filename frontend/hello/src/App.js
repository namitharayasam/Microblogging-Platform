import Login from './routes/login';
import Signup from './routes/signUp';
import Home from './routes/home';
import Help from './routes/help';

import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie'
import { Navigate } from 'react-router-dom';

function App() {

  const [cookie, setCookie] = useCookies(['token'])

  return (
    <BrowserRouter>
    {cookie.token?
        (<Routes> 
            {/* <Route path= "/home" element={<h1>BRUH</h1>}/> */}
            <Route path= "/home" element={<Home />}/>
            <Route path= "*" element={<Navigate to={'/home'}/>}/>
            <Route path="/help" element={<Help />} />

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
