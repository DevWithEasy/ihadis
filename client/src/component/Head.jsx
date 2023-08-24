import {Helmet} from 'react-helmet'
// eslint-disable-next-line react/prop-types
const Head = ({title,children}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            {children}
        </Helmet>
    );
};

export default Head;