"use client"
import Link from 'next/link'
import React from 'react'
const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 4,
    title: "About",
    url: "/about"
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard"
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact"
  }
]


const Navber = () => {

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Darkfam</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
       
       {
        links.map(link =>(
        <li> <Link key={link.id} href={link.url}>{link.title}</Link></li> 
        ))
       }
      </ul>
    </div>
  </div>
  )
}

  

export default Navber