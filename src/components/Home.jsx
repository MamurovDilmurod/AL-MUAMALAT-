import React from 'react'
import Header from './Header'
import OurServis from './OurServis'
import OurExpert from './OurExpert'
import OurPartners from './OurPartners'
import OurMedia from './OurMedia'
import Students from './Students'
import Form from './Form'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='max-w-[1320px] mx-auto'>
                <OurServis />
                <OurExpert />
                <OurPartners />
                <OurMedia />
                <Students />
                <Form />
            </div>
        </div>
    )
}

export default Home
