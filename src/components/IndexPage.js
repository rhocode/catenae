import React from 'react'
import { AthleteCard } from './AthleteCard'
import Navbar from './Navbar'
import SearchCard from './SearchCard'
import IndexCard from './IndexCard'
import Footer from './Footer'

export const IndexPage = () => (
  <div>
    <div className='container'>
      <Navbar />
      <IndexCard />

    </div>
    <Footer />
  </div>
  // <div className="home">
  //   <div className="athletes-selector">
  //     {athletes.map(
  //       athleteData => <AthleteCard key={athleteData.id} {...athleteData} />,
  //     )}
  //   </div>
  // </div>
)

export default IndexPage
