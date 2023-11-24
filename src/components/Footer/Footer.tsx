import { Facebook, GithubIcon, Instagram, Youtube } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex  justify-around items-center pb-10'>
            <div>
            <h1 className="text-2xl font-bold font-sans  text-blue-600">Ali Osaid.</h1>
            </div>
            <div className='flex gap-5'>
            <GithubIcon className='cursor-pointer'/>
            <Facebook className='cursor-pointer'/>
            <Youtube className='cursor-pointer'/>
            </div>
            <div>
                <p>Made by Ali Osaid</p>
            </div>
    </footer>
  )
}
