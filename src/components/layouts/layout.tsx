import React, {ReactNode} from "react";
import SeoMeta from "./seo-meta";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children?: ReactNode
    title?: string
    description?: string
    image?: string
    url?: string
}

const Layout = ({children, title, description, image, url}: LayoutProps) => {
    return (
        <div className="container-fluid">
            <SeoMeta title={title} description={description} image={image} url={url} />
            <div className="row">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout;
