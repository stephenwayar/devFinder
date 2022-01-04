import React, {useState} from "react";
import Image from "next/image";
import search from "../../assests/images/search.png"
import styles from "../../styles/Search.module.css"
import axios from "axios";
import Dev from "../dev/dev.component";
import Error from "../error/error.component";

const Search = ({}) => {

  const [input, setInput] = useState("")

  const [users, setUsers] = useState(null)

  const [error, setError] = useState(false)

  const handleChange = e => setInput(e.target.value) 

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${input}`)
      .then(res => {
        setUsers(res.data)
        setTimeout(() => setUsers(null), 15000)
      })
      .catch(() => {
        setError(true)
        setTimeout(() => setError(false), 9000)
      })
    setInput("")  
  }

  return(
    <div>
      <div className="px-5 sm:px-24 lg:px-64 md:px-36 xl:px-80 mbp:px-96 pt-8 2xl:mx-20 ">
        <div className="w-auto h-12 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md border-gray-800">

          <div className="float-left pt-3 pl-3">
            <Image width="20px" height="20px" src={search} alt="search icon" />
          </div>
          
        <form onSubmit={handleSubmit}>
          <div className="pt-1 float-left pl-4 w-auto">
              <input value={input} onChange={handleChange} className={`${styles.inpt} dark:text-gray-200 pl-2 border-none placeholder:pl-1 placeholder:text-xs ip6:w-52 ip6p:w-60 placeholder:italic w-40 h-10 bg-transparent`} type="text" placeholder="Search Github username..."/>
            </div>

            <div className="float-right pt-2 pr-2 text-gray-100">
              <button type="submit" className="animate-bounce hover:bg-blue-600 text-xs bg-blue-500 p-2 h-8 rounded-lg ">
                Search
              </button>
            </div>
          </form>  
        </div>
      </div>

      <div>
        <Error err={error} />
      </div>

      <div>
        {users === null ? null : <Dev dev={users} />}
      </div>
    </div>  
  )
}
export default Search