import React from 'react'
import Head from 'next/head'


interface Props{
    title: string
}

const Layout = ({title}:Props) =>{
    return(
        <Head>
            <title>{title}</title>

        </Head>

    )
}

export default Layout