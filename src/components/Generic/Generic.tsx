import Styles from './NotFound.module.css';

type GenericProps = {
    children: React.ReactNode;
};

function Generic({ children }: GenericProps) {
    return (
        <div className={Styles.Generic}>
            {children}
        </div>
    );
}

export default Generic;