import React, {lazy,Suspense} from "react"

import Navbar from "./coponents/Navbar/Navbar"

const Hero = lazy(() => import ("./coponents/Hero/hero"));

const Fashion = lazy(() => import( "./coponents/Fashion/fashion"))
const Title = lazy(() => import( "./coponents/Title/title"))
const Explore = lazy(() => import("./coponents/Explore/explore")) 
const Market = lazy(() => import("./coponents/Market/market")) 
const SimpleSlider = lazy(() => import ("./coponents/Photos/photo"))
const Article = lazy(() => import ("./coponents/Articles/article"))
const Innovative = lazy(() => import ("./coponents/Innovative/innovative"))
const Brand = lazy(() => import ("./coponents/Brand/brand"))
const Details = lazy(() => import ("./coponents/Details/detail"))
const Footer = lazy(() => import ("./coponents/Footer/footer"))


function App() {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<p>This is loading...</p>}>
      <Hero />
      <div className="container">
        <Title subtitle='Sustainable Fashion' title='More about sustaiable fashion' />
        <Fashion />
        <Explore />
        <Market />
        <Title subtitle='GALLARY' title='Fashion Photos'/>
        <SimpleSlider/>
        <Title subtitle='Articles & Blogs' title='What people say about sustainable fashion' />
        <Article/>
        <Title subtitle='Innovative Ideas' title='Lets Sustainably innovate the world' />
        <Innovative/>
        <Title subtitle='Fashion Brands' title='Lets shop sustainably'/>
        <Brand/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Details/>
        <Footer/>
      </div>
      </Suspense>
    </div>
  )
}

export default App
