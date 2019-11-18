import React from 'react'

const Form = (props) => {
    return (
        
        //create text inputs to query the city and country data
        //recieve props of fetchdata from getweather
        //submit button underneath

        <form onSubmit={props.getWeather}>
            <input
            type='text'
            placeholder='city'
            name='city'
            />
            <input
            type='text'
            placeholder='country'
            name='country'
            />
            <button>Submit</button>
        </form>
    )
}

export default Form; 