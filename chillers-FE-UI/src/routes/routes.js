import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Alert from '../Pages/Alerts';
import CounterDevices from "../Pages/CounterDevices/CounterDevices";
import CoolingCircuit from '../Pages/CoolingCircuit';
import WaterCircuit from '../Pages/WaterCircuit';
import LoginPage from '../Pages/LoginPage';
import AdminPanel from '../Pages/AdminPanel';
import PrivateRoute from './privateRoute';
import chillerHistory from '../Pages/ChillerHistory';
import { MenuAppBar } from "../Components/MenuAppBar/MenuAppBar";
import LocationManagement from '../Pages/LocationManagement/LocationManagement';
import CounterDetails from '../Pages/CounterDetails/CounterDetails';

const Routes = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <div className="full-height">
      <Route
        path="/"
        exact
        render={() =>
          userData ? <Redirect to="/" exact /> : <Redirect to="/signin" />
        }
      />


      <Route path="/signin" exact component={LoginPage} />

      <PrivateRoute
        path="/counters/alerts"
        exact
        isAuthorized={!!userData}
        component={Alert}
      />

      <PrivateRoute
        path="/location-management"
        exact
        isAuthorized={!!userData}
        component={LocationManagement}
      />
      <PrivateRoute
        path="/counters/devices"
        exact
        isAuthorized={!!userData}
        component={CounterDevices}
      />
      <PrivateRoute
        main
        path="/chillers/water-circuit"
        exact
        isAuthorized={!!userData}
        component={WaterCircuit}
      />
      <PrivateRoute
        path="/chillers/cooling-circuit"
        exact
        isAuthorized={!!userData}
        component={CoolingCircuit}
      />
      <PrivateRoute
        path="/admin-panel"
        exact
        isAuthorized={!!userData && userData.userType === 1}
        component={AdminPanel}
      />
      <PrivateRoute
        path='/chillers/chiller-history'
        exact
        isAuthorized={!!userData}
        component={chillerHistory}
      />
      <PrivateRoute
        path='/counter/details'
        exact
        isAuthorized={!!userData}
        component={CounterDetails}
      />
      
    </div>
  );
};

export default Routes;
