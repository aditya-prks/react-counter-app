import react, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br></br>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

function App(){

    return(
        <div className="flex items-center justify-center h-screen bg-gray-300">
            <Counter></Counter>
        </div>
    )
}


export default App
