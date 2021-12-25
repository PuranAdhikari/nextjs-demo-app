import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'

const name = 'Airbnb'
export const siteTitle = 'Airbnb'

export default function Layout({children, home}) {
    return (
        <div className={"container"}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Next.js Demo App"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <div className={"row"}>
                <>
                    <Navbar/>
                </>
            </div>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
