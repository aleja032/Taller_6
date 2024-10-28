import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeccionesLayout from '../pages/SeccionesLayout.jsx';
import Home from '../pages/Home.jsx';
import BarNavigation from '../components/BarNavigation.jsx';
function AppRoutes() {
    return (
       <BrowserRouter>
           <BarNavigation />
           <Routes>
               <Route path="/" element={ <Home /> } />
               <Route path="/cats" element={ <SeccionesLayout /> } />
               <Route path="/dogs" element={ <SeccionesLayout /> } />
               <Route path="/favorites" element={ <SeccionesLayout /> } />

           </Routes>
       </BrowserRouter>
    )
} export default AppRoutes;