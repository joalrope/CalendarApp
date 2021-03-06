import React, {useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { MainScreen } from '../MainScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    // const {checking, uid} = useSelector(state => state.auth);
    const {uid} = useSelector(state => state.auth);
    

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    // if (checking) {
    //     return (<h5>Espere...</h5>)
    // }
    

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login" 
                        component= {MainScreen}
                        isAuthenticated={!!uid}
                        redirectTo= "/"
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component= {CalendarScreen}
                        isAuthenticated={!!uid}
                        redirectTo="/login"
                    />

                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
