import React, { useState, useEffect } from 'react'
import './DatingCards.css'
import DatingCard from 'react-tinder-card'
import axios from './axios'

const DatingCards = () => {

    const [people, setPeople] = useState([
        {
            name: "Random Guy", imgUrl: "https://images.unsplash.com/photo1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
        },
        {
            name: "Another Guy", imgUrl: "https://pixabay.com/photos/japanese-macaque-animal-wildlife-7354393/"
        },
        {
            name: "Random Girl", imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90b"
        },
        {
            name: "Another Girl", imgUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVu"
        }
    ])

    //useEffect hook to do the API Call
    // useEffect(() => {
    //     async function fetchData() {
    //         const req = await axios.get("/dating/cards")
    //         setPeople(req.data)
    //     }
    //     fetchData()
    // }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
    }

    return (
        <div className='datingCards'>
            <div className="datingCards__container">
                {people.map((person) => (
                    <DatingCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)} >
                        <div style={{
                            backgroundImage: `url(${person.
                                imgUrl})`
                        }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))}
            </div>
        </div>
    )
}

export default DatingCards
