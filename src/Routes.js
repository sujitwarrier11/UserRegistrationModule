import React, { useEffect } from 'react';
import Login from '@root/src/Pages/Login';
import { Route, withRouter,useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const Routes = props => {
    const history = useHistory();
    let location = useLocation();
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);
      console.log("loc",location.pathname)
   
    return <>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={() => <div>Register</div>} />
    </>
}

export default Routes;