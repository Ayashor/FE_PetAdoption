import React from 'react'
import { useContext } from 'react'
import { PetContext } from '../../Contexts/petContext'
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import PetPictureModal from './PetPictureModal'
import EditPetModal from './EditPetModal'

const TableItems = () => {
    const { pets } = useContext(PetContext)

    return (
        <Table variant="simple" size={'sm'}>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Type</Th>
                    <Th>Status</Th>
                    <Th>Bio</Th>
                    <Th>Picture</Th>
                    <Th>Height</Th>
                    <Th>Weight</Th>
                    <Th>Color</Th>
                    <Th>Hypoallergenic</Th>
                    <Th>Diet</Th>
                    <Th>Breed</Th>
                    <Th>Edit</Th>
                </Tr>
            </Thead>
            <Tbody>
                {pets.map((pet) => (
                    <Tr key={pet.id}>
                        <Td>{pet.name}</Td>
                        <Td>{pet.type}</Td>
                        <Td>{pet.adoptionStatus}</Td>
                        <Td style={{ width: '200px' }}>{pet.bio}</Td>
                        <Td><PetPictureModal picture={pet.picture} /></Td>
                        <Td>{pet.height}</Td>
                        <Td>{pet.weight}</Td>
                        <Td>{pet.color}</Td>
                        <Td>{pet.hypoallergenic ? 'Yes' : 'No'}</Td>
                        <Td>{pet.dietaryRestrictions}</Td>
                        <Td style={{ width: '100px' }}>{pet.breed}</Td>
                        <Td><EditPetModal petId={pet._id} pet={pet}/></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default TableItems