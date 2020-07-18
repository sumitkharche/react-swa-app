import React, {useState,useEffect} from 'react'
import Header from './Header'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
      (async () => {
        setUserInfo(await getUserInfo());
      })();
    }, []);
  
    async function getUserInfo() {
      try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      } catch (error) {
        console.error('No profile could be found');
        return undefined;
      }
    }

    function goAuth() {
        //const { pathname } = '/';
        const redirect = `post_logout_redirect_uri=/`;
        const url = `/.auth/logout?${redirect}`;
        window.location.href = url;
      }


    return (
        <React.Fragment>
            <Header />
            {userInfo && (
            <Card style={{ width: '30rem', marginLeft:'400px',marginTop:'50px' }}>
                <Card.Body>
                    <Card.Title>Welcome {userInfo && userInfo.userDetails}</Card.Title>
                    {userInfo && (
                        <Button variant="primary" onClick={goAuth}>Logout</Button>
                    )}
                </Card.Body>
            </Card>
            )}
            {!userInfo && (
              <Link to="/">Please LogIn to access Dashboard</Link>
            )}
        </React.Fragment>
    )
}

export default Dashboard