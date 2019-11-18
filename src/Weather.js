import React from 'react'

// destructure props from api call state
const Weather = ({description, city, country, error, temperature}) => {

    //algorithm to match keywords with weather description
    //weather descirption converts into an array of string to be 
    //iterated individually per each word
    //return image if keywords are included

    function matchValues () {
    if(description) {
        const weatherDescription = description.split(' ')
        const keyWords = ['cloudy','clouds', 'cloud', 'overcast']
        for(let i = 0; i < weatherDescription.length; i++) {
            if(keyWords.includes(weatherDescription[i])) {
                return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' />
            }
        }
    }}

    return (
        //render city and country
        //&& operator test true value for data input
        //call the matchvalues algo

        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}  °F</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
        </div>
    )
}

export default Weather; 