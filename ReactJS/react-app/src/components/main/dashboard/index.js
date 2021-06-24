import React, { useEffect, useState } from 'react';
import { DashboardBox } from './styled';

function Dashboard({countState}){

  const [count, setCount] = useState(0);

  const [dashboardState, setDashboardState] = useState({
    isVisible: false,
    lista: ["uno","dos","tres"]
  });

  useEffect(() => {
    document.title = `Clicks ${count}`;
    console.log(dashboardState);
  });

  useEffect(() => {
    if(count===10){
      alert("Llego a 10!");
    }
  }, [count]);

  const handleclick = () => {
    countState.setState(countState.state+1);
    setDashboardState({
      ...dashboardState,
      isVisible: true
    });
  }
  return (
      <DashboardBox>
        <p>Clicks{count} times</p>
        <button onClick={() => setCount(count + 1)}> ClickMe! </button>
        <button onClick={handleclick}>Click Handle</button>
      </DashboardBox>
    );
}

export default Dashboard;