import { Facebook, GithubIcon, Instagram, Youtube } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row justify-around items-center pb-4 sm:pb-10'>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold font-sans text-blue-600">Ali Osaid.</h1>
      </div>
      <div className='flex gap-5'>
        <GithubIcon className='cursor-pointer text-lg sm:text-2xl' />
        <Facebook className='cursor-pointer text-lg sm:text-2xl' />
        <Youtube className='cursor-pointer text-lg sm:text-2xl' />
      </div>
      <div className='mt-3 sm:mt-0'>
        <p className="text-sm sm:text-base">Made by Ali Osaid</p>
      </div>
    </footer>
  )
}
