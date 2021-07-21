import "./App.css";
import Todo from "./components/Todo";

function App() {
    return (
        <div className='App'>
            <div
                style={{
                    height: "50px",
                    width: "100%",
                    background: "#1c52be"
                }}></div>

            <Todo />
        </div>
    );
}

export default App;
