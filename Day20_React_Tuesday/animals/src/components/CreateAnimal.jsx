import { useState } from 'react'

export default function CreateAnimal() {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [classification, setClassification] = useState('')
    const [conservationStatus, setConservationStatus] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = {name, species, classification, conservationStatus}

        fetch('http://localhost:800/animals', {
            method: 'POST',
            headers: { "Content-type" : "application/json"},
            body: JSON.stringify(animal)
        })

        alert("Animal added")
        setName('')
        setSpecies('')
        setClassification("Please Select")
        setConservationStatus("Please Select")

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name of Animal: </label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}></input>
            <br />
            <br />
            <label>Species: </label>
            <input type="text" required value={species} onChange={(e) => setSpecies(e.target.value)}></input>
            <br />
            <br />
            <label name="Conservation Status" required value={classification} onChange={(e) => setClassification(e.target.value)}>Classification: </label>
            <select>
                <option>Please Select</option>
                <option value="amphibian">Amphibian</option>
                <option value="bird">Bird</option>
                <option value="fish">Fish</option>
                <option value="insect">Insect</option>
                <option value="mammal">Mammal</option>
                <option value="reptile">Reptile</option>
            </select>
            <br />
            <br />
            <label>Conservation Status: </label>
            <select name="Conservation Status" required value={conservationStatus} onChange={(e) => setConservationStatus(e.target.value)}>
                <option>Please Select</option>
                <option value="extinct">Extinct (EX)</option>
                <option value="extinctWild">Extinct in the Wild (EW)</option>
                <option value="criticallyEndangered">Critically Endangered (CR)</option>
                <option value="Endangered">Endangered (EN)</option>
                <option value="vulnerable">Vulnerable (VU)</option>
                <option value="nearThreatened">Near Threatened (NT)</option>
                <option value="conservationDependent">Conservation Dependent (CD)</option>
                <option value="leastConcern">Least Concern (LC)</option>
            </select>
            <br />
        </form>
    )

}