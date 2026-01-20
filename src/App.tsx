import Home from './pages/Home/Home';
import TaskContextProvider from './contexts/TaskContext/TaskContextProvider';



function App() {

    return (
        <TaskContextProvider>
            <Home/>
        </TaskContextProvider>
    );
}

export default App;