import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>Cali store shop - {pagina} </title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>
            <Header/>
                {children}
            <Footer/>
        </div>

    )
}

export default Layout