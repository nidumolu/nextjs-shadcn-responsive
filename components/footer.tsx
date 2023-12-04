import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer
            className="rounded-2xl border-1 border-solid border-black h-[10vh] p-1 m-1
             fixed 
             inset-x-0 
             bottom-0 
             ">
            <div className="grid grid-rows-3 grid-flow-col gap-1 shrink">
                <div className="row-span-2 rounded-lg">
                    <div>
                        <div className="mt-1 grid grid-rows-1 grid-flow-col ">
                        <Input type="email" placeholder="Email" className="shrink relative w-30" />
                            <Button variant="destructive" className="shrink ">Subscribe</Button>
                        </div>
                        <div className="mt-1 grid grid-rows-1 grid-flow-col p-1">
                            <Link href={""}>
                                <Facebook className="text-blue-500" />
                            </Link>
                        
                            <Link href={""}>
                                <Twitter className="text-sky-300" />
                            </Link>
                        
                            <Link href={""}>
                                <Instagram className="text-pink-500" />
                            </Link>
                            
                            <Link href={""}>
                                <Linkedin className="text-blue-400" />
                            </Link>
                          </div>  
                        
                    </div>


                </div>
                <div className="row-span-2 col-span-2 rounded-lg">
                    <div className="text-sm font-thin items-center justify-between space-y-2" >

                        <div className="text-sm font-thin  rounded-lg ">
                            Quick Links
                        </div>

                        <div className="flex-1 space-x-4 text-sm font-thin ">
                            <Link href={"/"} className="">
                                What our customers say
                            </Link>
                            <Link href={"/"} className="">
                                About Us
                            </Link>
                            <Link href={"/"} className="">
                                Contact Us
                            </Link>
                            <Link href={"/"} className="">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="col-span-2 text-sm font-thin  rounded-lg justify-stretch ">
                            @2024 All rights reserved by www.srini.tech.
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    )
}