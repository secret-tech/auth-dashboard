import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from '../../auth/SignUp';
import SignIn from '../../auth/SignIn';

import * as routes from '../../../routes';

const AuthWrapper = () => {
  return (
    <div>
      <Switch>
        <Route exact path={routes.SIGN_UP} component={SignUp}/>
        <Route exact path={routes.SIGN_IN} component={SignIn}/>
        
        <Redirect from="*" to={routes.SIGN_IN}/>
      </Switch>
    </div>
  );
};

export default AuthWrapper;