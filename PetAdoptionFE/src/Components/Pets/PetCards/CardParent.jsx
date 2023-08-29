import React from 'react'
import { useEffect, useState, useContext } from 'react'
import  PetCard from './PetCard.jsx'
import axios from 'axios'
import { PetContext } from '../../../Contexts/petContext.js'



const CardParent = () => {
  const { pets } = useContext(PetContext)
  


  const cards = pets.map(pet =>{
      return <PetCard key={pet.id} pet={pet}/>
    })

  return (
    <>{cards}</>
  )
}

export default CardParent