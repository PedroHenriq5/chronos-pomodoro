import TaskContextProvider from './contexts/TaskContext/TaskContextProvider';
import Message from './components/MessageContainer/Message';
import MainRouter from './Routers/MainRouter/MainRouter';


function App() {

    return (
        <TaskContextProvider>
            <Message>
                <MainRouter />
            </Message>
        </TaskContextProvider>
    );
}

export default App;