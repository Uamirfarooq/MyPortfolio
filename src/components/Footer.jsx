import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
const Footer = () => {
  return (
    <footer className='dark:text-light w-full border-t-2 dark:border-light border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between '>
            <span>{new Date().getFullYear()} &copy; All Rights Recived.</span>
            <div className='flex items-center'>Build with <span className=' text-primary dark:text-primaryDark text-2xl px-1 '>&#9825;</span>By &nbsp; <Link className="underline underline-offset-2" href="/Me">UmairFarooq</Link></div>
            <Link className="underline underline-offset-2" href="/Me">Contact Me</Link>
        </Layout>
    </footer>
  )
}

export default Footer
