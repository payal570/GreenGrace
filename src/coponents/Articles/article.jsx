import React from 'react'
import './article.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        id: 1,
        name: "Niladri Pal",
        published: "March 2024",
        quote:" Sustainable fashion refers to the creation and marketing of clothing and accessories that prioritise environmental and social responsibility throughout their lifecycle. This includes the use of eco-friendly materials, ethical manufacturing processes that ensure fair wages and safe working conditions, designs that promote longevity and versatility, and initiatives aimed at recycling or repurposing garments at the end of their lifecycle. The essence of sustainable fashion lies in minimising the industry’s carbon footprint and mitigating its impact on the planet and its inhabitants."
    },
    {
        id: 2,
        name: "Sam Schneider",
        published: "Jun 2023",
        quote:"Clothing is a huge part of people’s lives and a great way for them to make a difference. They may not have the power to influence the fashion industry directly, but they can educate themselves and raise awareness about who makes their clothes, the materials from which they are made, and how the production of those clothes impacts people and the environment. By practicing sustainable fashion, brands can help improve industry practices, support garment workers, and reduce environmental damage."
    },
    {
        id: 3,
        name:" Isabel Slone",
        published: " feb 2022",
        quote:"Slow fashion is a practice, a set of values that asks adherents to prolong the life span of their existing garments and, if they must shop, to buy secondhand. But increasingly the term has been adopted by brands that do little more than produce clothing in smaller quantities.The clothes these companies sell may be made in small batches by workers who are paid fair wages, but it’s all still new stuff, created using resources extracted from a finite planet."
    },
    {
        id: 4,
        name: "Mirasol Floren,CPA, CMA",
        published: "mar",
        quote: "The rise of inflation, weakening of currencies, world pandemics, and global issues are however also influencing the way the market behaves. The global crisis, whether it is an economic recession, a pandemic, or a climate emergency, can have a significant impact on consumer choices when it comes to sustainability. For example, here in the Philippines, due to economic hardship, consumers are more likely to prioritize cost over sustainability."
    }
]

function Article() {
return(
    <div className='article'>
<Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(user => (
        <SwiperSlide key={user.id} className='slide'>
            <div className='slide-content'>
                <div className='user'>
                    <h3>{user.name}</h3>
                    <h5>{user.published}</h5>
                    <p className='user-quote'>" <i>{user.quote}</i>"</p>
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
);
}

export default Article;