import React from 'react';
import './TripsPage.css';
import NavBar from '../../components/NavBar/NavBar';
import TripList from '../../components/TripList/TripList';


const TripsPage = (props) => {
    return (
      <div className="TripsPage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        {props.motorcycles.map(m => (
          <TripList motorcycle={m} key={m._id} />
        ))}
      </div>
    );
  
  };
  
  export default TripsPage;
