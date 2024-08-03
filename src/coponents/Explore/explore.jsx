import React from 'react'
import './explore.css'
import recycle from '../../assets/recycle.jpeg'

function Explore() {
    return (
        <div className='explore'>
            <div className='explore-left'>
                <h3>Sustainable Fashion</h3>
                <p>
                    <b>Sustainable fashion </b>is a term describing efforts within the fashion industry to reduce its  enviornmental impacts,and uphold animal welfare.
                    Sustainable fashion is a way in which brands creats clothing that only reduce the impact on enviornment but also mindful of the people who work to produce the garments.
                    Sustainable fashion refers to clothing that is designed, manufactured, distributed, and used in ways that are environmentally friendly
                </p>
                <p>
                    <b>Ethical fashion,</b> a related term that is also prevalent in concious consumerism world, refers to clothing made in ways that value social welfare and worker rights.</p>
                <p>
                    Ethical fashion refers to clothing and accessories produced in a way that priorities social environmental responsibilities. This include fair labour practices, sustainable sourcingof materials, and minimizing enviornmental imapact. Ethical fashion often emphasizes transparency in supply chain, promoting fair wages for workers, reducing waste, and using eco friendly materials.
                </p>

            </div>
            <div className='explore-right'>
                <img src={recycle} alt='' className='recycle' />
            </div>
        </div>
    )
}

export default Explore