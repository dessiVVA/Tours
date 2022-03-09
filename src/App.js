import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Loading from "./components/Loading";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const[tours, setTours] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  useEffect(() => {
    getData();
    setIsLoading(false)
  }, []);

  if(isLoading){
    return <Loading />
  }
  else{
    return <Dashboard tours={tours} removeTour={removeTour} />;
  }
  
}
export default App;
