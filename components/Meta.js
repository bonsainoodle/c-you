import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
    return (
        <Head>
            <title>{`${title}`}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={description}></meta>
            <meta name="keywords" content={keywords}></meta>
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content="..." />

            <meta property="og:image" content="..." />
            <meta property="og:image:secure_url" content="..." />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:alt" content="logo" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="..." />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                names="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
            <meta name="theme-color" content="#0000" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "C-You",
    description: "...",
    keywords: "...",
};

export default Meta;
