"use client"

import React from 'react'
import { ModeToggle } from "./mode-toggle"
import {UserNav} from "./user-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchBar from './searchBar'
const HeaderTag = () => {
  return (
    <>

      <div className="flex flex-row flex-1 justify-evenly">
        <div className="flex-1 flex-row rounded-r-2xl justify-start ">
          <Avatar>
            <AvatarImage src="YourLogo.png" />
            <AvatarFallback>Header</AvatarFallback>
          </Avatar>
        </div>
       
        <div className="flex-row shrink  justify-stretch align-middle"><SearchBar/></div>
        <div className="flex-row align-middle p-2 m-2 ">
          <UserNav/>
          </div>
          <div className="flex-row align-middle p-2 m-2 ">
          <ModeToggle /></div>

      </div>
    </>
  )
}

export default HeaderTag