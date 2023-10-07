
import type { Metadata } from 'next'
import Image from 'next/image'
import TypePipe from '@/components/TypePipe'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
title: 'Article',
description: 'Generated by create next app',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
    <html lang="en">
    <body className='bg-[#011627]'>
        <main className='container bg-[#011627] '> <div className=' flex flex-col items-center pt-10'>
        <Image src={'/logo.svg'} height={200} width={200} alt="" />
        <h4 className=" text-xl font-semibold pt-3 text-white h-5"><TypePipe fulltext="Unlock the Power of Data for a Brighter Future"/></h4>
        </div>
        {children}
        
        </main>
        <Footer />
        </body>
    </html>
)
}