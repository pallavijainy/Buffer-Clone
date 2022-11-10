
import './App.css';
import { Andbox } from './component/Andbox';
import { Bluebox } from './component/Bluebox';
// import WithSubnavigation from './component/Demo';
import { DownLogos } from './component/DownLogos';
import { Footer } from './component/Footer';
import { Fourth } from './component/Fourth';
import { Frontone } from './component/Frontone';
import { MiddleOne } from './component/MiddleOne';
import { MidTwo } from './component/MidTwo';
import { Navbar } from './component/Navbar';
import { Sliding } from './component/Sliding';
import { Year } from './component/Year';
import { RouterPage } from './Pages/RouterPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MiddleOne/>
      <MidTwo/>
      <Frontone/>
      <Fourth/>
     <RouterPage/>

<Sliding/>
<Year/>
<Andbox/>
<DownLogos/>
<Bluebox/>
<Footer/>
{/* <WithSubnavigation/> */}
    </div>
  );
}

export default App;
