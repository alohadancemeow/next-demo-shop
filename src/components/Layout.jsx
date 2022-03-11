import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Next-Demo-Shop</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout