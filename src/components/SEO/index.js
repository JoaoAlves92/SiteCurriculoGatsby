import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({title}) => {
    return(
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="author" content="João Alves"/>
            <meta name="title" content="Joao Alves Portifolio Website"/>
            <meta name="description" content="Portfolio Website built with GatsbyJS to pratice my skills as a FrontEnd developer!"/>
            <meta http-equiv="content-language" content="pt-br"/>
            <meta name="reply-to" content="jvamarangonia@gmail.com"/>
        </Helmet>
    )
}

export default Seo;