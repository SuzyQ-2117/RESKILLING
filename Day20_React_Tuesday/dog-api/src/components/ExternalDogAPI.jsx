import { useState, useEffect } from 'react'

export default function ExternalDogAPI() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'
    const [imageUrl, setImageUrl] = useState(' ');

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setImageUrl(data.message))
    }, [])

    return (
        <div>
            <img src={imageUrl} alt='A random picture of a dog' />
        </div>
    )
}