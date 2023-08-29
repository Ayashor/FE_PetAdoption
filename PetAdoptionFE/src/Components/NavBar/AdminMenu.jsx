import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <Menu>
        <MenuButton cursor={'pointer'} as={Text} color={'white'}>
            Dashboards <ChevronDownIcon  />
        </MenuButton>
        <MenuList>
            <MenuItem><Link to="/adminDash"style={{color: 'black'}}>Admin Dashboard</Link></MenuItem>
            <MenuItem><Link to='/dashboard' style={{color: 'black'}}>Profile Dashboard</Link></MenuItem>
        </MenuList>
    </Menu>
  )
}

export default AdminMenu