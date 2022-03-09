import React from "react";

const Refresh = (props) => {
    const handleRefresh = () => {
        props.setIsLoading(true);
        props.setEffect(!props.effect);
    }
    return (
    <div className="container">
      <h1>No tours left</h1>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Refresh;
