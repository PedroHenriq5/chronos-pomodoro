import { Heading,  Footer } from '../../exports';

type formProps = {
    children: React.ReactNode;
};

function MainTemplate({children}: formProps){
    return ( 
        <>
            <Heading />
            {children}
            <Footer />
        </>
    );
}

export default MainTemplate;
