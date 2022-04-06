import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({ children, title = 'I will have order' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="From a buyer, now a seller." />
                <link rel="icon" href="/logo2.svg" />
            </Head>

            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout