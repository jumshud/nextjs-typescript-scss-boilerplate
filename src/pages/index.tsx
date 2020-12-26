import React from "react";
import Layout from "../components/layouts/layout";
import Index from "../components/home";


function IndexPage() {
    return <Layout title="Page title" description="page Description" >
        <Index />
    </Layout>
}

export default IndexPage;