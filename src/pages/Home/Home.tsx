import { Clock, Form } from '../../exports';
import MainTemplate from '../../templates/mainForm/MainForm';

function Home() {
    
    return (
            <MainTemplate>
                <Clock  />
                <Form  />
            </MainTemplate>
    );
}

export default Home;