import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import Login from '@root/src/Pages/Login';
import Register from '@root/src/Pages/Register';
import Profile from '@root/src/Pages/Profile';
import { Route, withRouter,useHistory, useLocation } from 'react-router-dom';
import withAuth from '@root/src/Components/withAuth';


const Routes = ({ isAuthorised }) => {
    const history = useHistory();
    let location = useLocation();
    useEffect(()=>{
      console.log("edfref")
    },[]);
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);
      console.log("loc",location.pathname)

      const checkAuthorization = Comp => {
         
          return withRouter(( { history } ) => {
            useEffect(()=>{
              if(!isAuthorised) history.push("/");
            },[]);
            return  isAuthorised ?  <Comp /> : '';
          });
      }
   
    return <>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile}  />
    </>
}

export default withAuth(Routes);