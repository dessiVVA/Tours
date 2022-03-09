import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Loading from "./components/Loading";
import Refresh from "./components/Refresh";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const[tours, setTours] = useState([]);
  const[refresh, setRefresh] = useState(false);
  const[effect, setEffect] = useState(false)

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
    if(tours.length == 1){
      setRefresh(true);
    }
  }

  useEffect(() => {
    getData();
    setRefresh(false)
    setIsLoading(false)
  }, [effect]);

  if(isLoading){
    return <Loading />
  }
  if(refresh){
    return <Refresh effect={effect} setEffect={setEffect} setIsLoading={setIsLoading} />
  }
  else{
    return <Dashboard tours={tours} removeTour={removeTour} />;
  }
  
}
export default App;
