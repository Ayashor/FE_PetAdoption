import React from 'react'
import { Text, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const PetsMenu = () => {
  return (
        <Menu>
            <MenuButton cursor={'pointer'} as={Text} color={'white'}>
                Pets <ChevronDownIcon  />
            </MenuButton>
            <MenuList>
                <MenuItem><Link to='/my-pets' style={{color: 'black'}}>My Pets</Link></MenuItem>
                <MenuItem><Link to='/all-pets' style={{color: 'black'}}>All Pets</Link></MenuItem>
            </MenuList>
        </Menu>
  )
}

export default PetsMenu