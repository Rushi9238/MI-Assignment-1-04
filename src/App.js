import React, { useState } from 'react'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import './App.css';

import FrontPage from './Components/MainContaine/FrontPage';
import SecondPage from './Components/MainContaine/SecondPage';
import ThirdPages from './Components/MainContaine/ThirdPages';
import ForthPages from './Components/MainContaine/ForthPages';
import StepCount from './Components/StepCount'
import { logoImg } from './Constatnt/Imgages';

const stepeer = ['LooksOneIcon', 'LooksTwoIcon', 'Looks3Icon', 'Looks4Icon']
const step = {
  select: false,
  complete: false
}
function App() {
  const [count, setCount] = useState(1)
  const showInputBox = (step) => {
    switch (step) {
      case 1:
        return <FrontPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPages />;
      case 4:
        return <ForthPages />;
      default:
        return '';
    }
  }
  const handelCount = () => {
    if (count > 0 && count < 4) {
      setCount(count + 1)
      step.complete = true
    }
  }
  return (
    <div className="App">
      <div className='mainDiv'>
        <img src={logoImg} />
        <div className='stepper'>
          <LooksOneIcon
            fontSize='large'
            color={ count<1 ? '' : 'primary'}
            
          />
           <hr style={{width:'15%',border:`1px solid ${count<2 ? '' : '#1976d2'}`}} />
          <LooksTwoIcon
            fontSize='large'
            color={ count<2 ? '' : 'primary'}
            style={{borderRadius:'50%'}}
          />
           <hr style={{width:'15%',border:`1px solid ${count<3 ? '' : '#1976d2'}`}} />
          <Looks3Icon
            color={ count<3 ? '' : 'primary'}
            fontSize='large'
          />
           <hr style={{width:'15%',border:`1px solid ${count===4 ? '#1976d2' : ''}`}} />
          <Looks4Icon
            color={ count===4 ? 'primary' : ' '}
            fontSize='large'
          />
          {/* <StepCount/> */}


        </div>
        <div className='showInput'>
          {showInputBox(count)}
        </div>

        <button onClick={handelCount}>{count == 4 ? 'Launch Eden' : 'Create Workspace'}</button>

      </div>
    </div>
  );
}

export default App;
