import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import PetsMenu from './PetsMenu'
import AdminMenu from './AdminMenu'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/authContext'
import { useNavigate } from 'react-router-dom'


const NavBar = ({isLoggedIn, setIsLoggedIn, navBackground}) => {
  const { signupData } = useContext(AuthContext)
  const navigate = useNavigate()
  const isAdmin = signupData.isAdmin

  const handleLogOut = () => {
      localStorage.clear('token', 'signupDataLocal')
      setIsLoggedIn(false)
      navigate('/')
  }
  
  return (
    <div className='navbar-container'>
        <nav className='navBar' style={{ backgroundColor: navBackground }}>
          <div className='left'>
            <Link to='/'>Home</Link>
            <Link to= '/search-page'>Search</Link>
          </div>  
          <div className='right'>
          {!isLoggedIn && (
          <>
            <LoginModal isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <SignUpModal isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          </>
        )}
        {isLoggedIn && (
          <>
            <PetsMenu/>
            {isAdmin ? (
              <AdminMenu />
            ) : (
              <Link to='/dashboard'>Dashboard</Link>
            )}
            <Button color='white' variant='info' onClick={handleLogOut}>Log out</Button>
          </>
        )}
          </div>
        </nav>
    </div>
  )
}

export default NavBar