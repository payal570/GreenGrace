import React, { useRef } from 'react'
import './brand.css'
import next from '../../assets/next.png'
import prev from '../../assets/prev.png'

function Brand () {

    const slider = useRef();
    let tx = 0;

    function slideforward() {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    function slidebackward() {
        if (tx < -50) {
            tx += 25;
        }
        slider.current.style.transform = `translateX (${tx}%)`;
    }
    
    return(
        <><div className='brand'>
            <img src={next} alt='' className='next-btn' onClick={slideforward} />
            <img src={prev} alt='' className='prev-btn'  onClick={slidebackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <h3>B Label</h3>
                                </div>
                                <p>
                                B Label is one of the finest sustainable Indian clothing brands that manufactures fashionable dresses for men and women.
                                From Kimono Dress, Dungarees, Kurtas, Cargos, Palazzos, and Shorts, this brand has it all. They are pioneers when it comes to using nature's best gift, "Hemp," as a fabric to design eco-friendly clothing.
                                </p>
                                <button className='brand-btn'><strong>B Label</strong></button>
                        </div>
                    </li>
                    
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <h3>Doodlage</h3>
                                </div>
                                <p>
                                Doodlage prides itself in being an eco-fashion brand that believes in recycling and upcycling waste fabrics into timeless slow fashion clothing for men and women. Their designs are quirky, and make sure that you grab eyeballs when you sport one from their short limited edition collections.
                                </p>
                                <button className='brand-btn'><strong>Doodlage</strong></button>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <h3>Joskai Studio</h3>
                                </div>
                                <p>
                                Joskai Studio is one of the ethical fashion labels of India and works with grassroots-level artisans of ethnic communities. With Unique craftsmanship and textile innovation, the brand's sustainability quotient is portrayed in the gorgeous fashion dresses for women.
                                </p>
                                <button className='brand-btn'><strong>Joskai Studio</strong></button>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <h3>Lable Muslin</h3>
                                </div>
                                <p>
                                Lable Muslin is one of the homegrown fashion brands that promotes handcrafted luxury through its upcycled and ethical fashion products for men and women. Their main aim is to give conscious consumers pieces of garments that not only fit their body like a glove but also add an exquisite and mindful touch to their wardrobe.
                                </p>
                                <button className='brand-btn'><strong>Lable Muslin</strong></button>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            </>
    )
}

export default Brand