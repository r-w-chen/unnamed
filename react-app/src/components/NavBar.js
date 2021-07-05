import React from 'react';
import { Link, Flex, Box } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';

const navLinkHover = {
  borderBottom: '3px solid #385170'
}

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav>
      <Flex h={50} justify="space-between" alignItems='center' borderBottom='3px solid rgb(235, 239, 239)'>
          <Link as={NavLink} to="/" exact={true} activeClassName="active" m={5}>
            Intentions
          </Link>
        {user ?
          <LogoutButton />
        :
        <>
          <Box h='100%'>
          <Link as={NavLink} to="/login" exact={true} activeClassName="active"
           display='inline-block' pt={3} m='0px 10px' h='100%' transition='100ms'
           _hover={navLinkHover}
           >
            Login
          </Link>
          <Link as ={NavLink} to="/sign-up" exact={true} activeClassName="active"
           display='inline-block' h='100%' pt={3} m='0px 10px'
           _hover={navLinkHover}
           >
            Sign Up
          </Link>
          </Box>

        </>
        }
      </Flex>
    </nav>
  );
}

export default NavBar;
