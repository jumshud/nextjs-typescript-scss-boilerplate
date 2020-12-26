import React from "react";
import Head from 'next/head'

interface MetaProps {
    title?: string
    description?: string
    image?: string
    url?: string
}

const SeoMeta = ({title, description, image, url}: MetaProps) => {
    const siteName:string = 'siteName';

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
            <meta name="robots" content="noindex, nofollow" key="robots" />
            <meta name="description" content={description} key="desc" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="tw-card" />
            <meta name="twitter:title" content={title} key="tw-title" />
            <meta name="twitter:description" content={description} key="tw-desc" />
            <meta name="twitter:site" content={siteName} key="tw-site" />
            <meta name="twitter:creator" content="" key="tw-creator" />
            <meta name="twitter:image" content={image} key="twitter-image" />
            {/* Open Graph */}
            <meta property="og:url" content={url} key="og-url" />
            <meta property="og:image" content={image} key="og-image" />
            <meta property="og:site_name" content={siteName} key="og-sitename" />
            <meta property="og:title" content={title} key="og-title" />
            <meta property="og:description" content={description} key="og-desc" />

            <title>{title}</title>
        </Head>
    )
}

export default SeoMeta;