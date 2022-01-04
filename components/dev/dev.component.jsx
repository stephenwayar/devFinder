import React from "react";
import Image from "next/image";
import location from "../../assests/images/location.png"
import twitter from "../../assests/images/twitter.png"
import company from "../../assests/images/company.png"
import chain from "../../assests/images/chain.png"

const Dev = ({dev}) => {

  var mydate = new Date(`${dev.created_at}`)

  return(
    <div className="pt-4 px-5 sm:px-24 lg:px-64 md:px-36 xl:px-80 mbp:px-96 2xl:mx-20">

      <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl pb-8 ">
        
        <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 ">
        
          <div className="pt-6 pl-4">
            <Image 
              className="rounded-full"
              src={dev.avatar_url} 
              alt="profile avatar" 
              width="80px"
              height="80px"
            />
          </div>

          <div className="lg:col-span-1 col-span-2 sm:col-span-3 xl:col-span-2 pl-3 ip6:pl-0 pt-7">
            <h1 className="text-gray-900 font-bold font-mono dark:text-gray-200">{dev.name}</h1>
            <p className="text-xs text-[#4B91E2]">
              <a href={dev.html_url}>@{dev.login}</a>
            </p>
            <p className="lg:hidden text-xs font-mono text-gray-900 dark:text-gray-200">
              Joined: {mydate.toDateString()}
            </p>
          </div>
          
          <div className="text-sm text-gray-900 dark:text-gray-200 font-mono pt-7 pl-20 hidden lg:block lg:pr-3 lg:col-span-2 xl:col-span-2 2xl:pr-2">
            <h1>Joined: {mydate.toDateString()}</h1>
          </div>

        </div>

        <div className="text-gray-900 dark:text-gray-200 px-6 text-justify py-4 text-sm font-sans">
          <h1>
           {dev.bio}
          </h1>
        </div>

        <div className="font-mono ip6:text-sm text-gray-900 dark:text-gray-200 grid grid-cols-3 text-center rounded-xl mx-6 py-4 bg-gray-100 dark:bg-gray-900">

          <div>
            <h1 className="text-xs pb-1">Repos</h1>
            <code>{dev.public_repos}</code>
          </div>

          <div>
            <h1 className="text-xs pb-1">Followers</h1>
            <code>{dev.followers}</code>
          </div>

          <div>
            <h1 className="text-xs pb-1">Following</h1>
            <code>{dev.following}</code>
          </div>

        </div>
        
        <div className="md:grid md:grid-cols-2 text-sm text-gray-600 font-mono dark:text-gray-400">

          <div>
            <div className="px-7 pt-5">
              <Image 
                className=""
                width="12px"
                height="16px"
                alt="location pin" 
                src={location} 
              />
              <span className="pl-4">{dev.location ? dev.location : "Not Available"}</span>
            </div>

            <div className="px-7 pt-2">
              <Image 
                className=""
                width="15px"
                height="17px"
                alt="location pin" 
                src={chain} 
              />
              <span className="px-4">
                <u>{dev.blog ? dev.bio : "Not available"}</u>
              </span>
            </div>
          </div>

          <div>
            <div className="px-7 pt-2 md:pt-5">
              <Image 
                className=""
                width="15px"
                height="13px"
                alt="location pin" 
                src={twitter} 
              />
              <span className="pl-4">
                {dev.twitter_username ? dev.twitter_username : "Not available"}
              </span>
            </div>

            <div className="px-7 pt-2">
              <Image 
                className=""
                width="15px"
                height="15px"
                alt="location pin" 
                src={company} 
              />
              <span className="pl-4">
                {dev.company ? dev.company : "Not available"}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
export default Dev