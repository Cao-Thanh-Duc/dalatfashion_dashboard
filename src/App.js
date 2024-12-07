import './App.css'
import MainDashboard from './Components/MainDashboard/MainDashboard'
import RightSide from './Components/RightSide/RightSide';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <MainDashboard/>
          <RightSide/>
        </div>
    </div>
  );
}

export default App;
