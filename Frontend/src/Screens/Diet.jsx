import React from 'react'
import Navbar from '../Components/Navbar'
import DietCard from '../Components/DietCard'
import protein from '../photos2/protein.jpeg'
import calcium from '../photos2/calcium.jpeg'
import carbs from '../photos2/carbs.jpeg'
import vitamins from '../photos2/vitamins.jpeg'
export default function Diet() {
    return (
        <>
            <Navbar />
            <DietCard mineral="Protein" image={protein} />
            <DietCard mineral="Vitamins" image={vitamins} />
            <DietCard mineral="Hydration" />
            <DietCard mineral="Carbohydrates" image={carbs} />
            <DietCard mineral="Calcium" image={calcium} />
        </>
    )
}
