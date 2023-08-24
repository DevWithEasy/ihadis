// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div
            className="h-screen flex"
        >
            <div>
                side
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;