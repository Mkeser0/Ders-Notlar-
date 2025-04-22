// ProtectedRoute component
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({children, ...rest}) => {
    const { isAuthenticated} = useContext(AuthContext);
    // Check if the user is authenticated
    // If authenticated, render the children components
    // If not authenticated, redirect to the login page
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default ProtectedRoute;

// jwt.decode kullanımı

import {jwtDecode} from 'jwt-decode';
const token = localStorage.getItem('token');
const decodedToken = jwtDecode(token);
console.log(decodedToken);
// token'dan kullanıcı bilgilerini almak için
const userId = decodedToken.userId;
const userRole = decodedToken.role;
// token'dan expiration tarihini almak için
const expirationDate = decodedToken.exp;
// token'dan diğer bilgileri almak için
const otherInfo = decodedToken.otherInfo;


