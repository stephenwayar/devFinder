import React, {useState, useEffect } from 'react'
import Nav from '../components/nav/nav.component'
import Search from '../components/search/search.component'

const Home = () => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle)

  useEffect(() => {
    document.title = "DevFinder"

    const html = document.querySelector("html") 

    toggle 
      ? html.classList.add("dark") 
      : html.classList.remove("dark")
      
  }, [toggle])

  return (
    <div className="sm:mt-20 lg:mt-2 pt-14 ip6:pt-20 md:mt-24 xl:mt-24 ip6p:pt-20 mbp:mt-0">
      <Nav 
        toggle={toggle}
        click={handleClick}
      />

      <Search />
    </div>
  )
}
export default Home