import Home from './pages/Home/Home';
import TaskContextProvider from './contexts/TaskContext/TaskContextProvider';
import Message from './components/MessageContainer/Message';


function App() {

    return (
        <TaskContextProvider>
            <Message>
                <Home/>
            </Message>
        </TaskContextProvider>
    );
}

export default App;