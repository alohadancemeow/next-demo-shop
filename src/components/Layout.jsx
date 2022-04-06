import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({ children, title = 'I will have order' }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content={['Manga', 'Novel', 'Shop', 'Next']} />
                <meta name="description" content="From a buyer, now a seller." />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="twcard" />
                <meta name="twitter:creator" content='alohadancemeow' key="twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content="I will have order" key="ogurl" />
                <meta property="og:image" content='/image3.gif' key="ogimage" />
                <meta property="og:site_name" content="https://next-demo-shop.vercel.app/" key="ogsitename" />
                <meta property="og:title" content="I will have order" key="ogtitle" />
                <meta property="og:description" content="From a buyer, now a seller." key="ogdesc" />
                <title>{title}</title>
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