import React, {useState} from 'react'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents , Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'
import Ban from '../components/Ban'
import WomensBan from '../components/WomensBan'
const MainPages = () => {
  const[gentsFashion,setGentsFashion]=useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Ladies);
  return (
    <div>
      <Header />
      <Ban />
      <Collections gentsFashion={gentsFashion}/>
      <WomensBan />
      <WomenCollection ladiesFashion={ladiesFashion} />
      <Footer />
    </div>
  )
}

export default MainPages
