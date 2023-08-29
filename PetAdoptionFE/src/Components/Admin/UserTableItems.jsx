import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/authContext'
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import UserPetModal from './UserPetModal.jsx'


const UserTableItems = () => {
    const { users } = useContext(AuthContext)
    return (
        <Table variant="simple" size={'lg'}>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Phone</Th>
                    <Th>Admin?</Th>
                    <Th>Adopted Pets</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((user) => (
                    <Tr key={user._id}>
                        <Td>{user.firstName} {user.lastName}</Td>
                        <Td>{user.email}</Td>
                        <Td>{user.phone}</Td>
                        <Td>{user.isAdmin ? 'Yes' : (user.isAdmin === false ? 'No' : '')}</Td>
                        <Td><UserPetModal userId={user._id}/></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default UserTableItems