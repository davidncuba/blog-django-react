import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';
interface Title{
    title?: string;
}

export const TitleComponent = ({title} :Title) => {
    var defaultTitle = 'Blog';
    return (

        <HelmetProvider>
        <Helmet>
        <title>{title ? title : defaultTitle}</title>
        </Helmet>
        </HelmetProvider>
    );
};

