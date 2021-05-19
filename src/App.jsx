import Counter from "./Counter";
import "./App.css";
import StateProvider from "./StateProvider";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Counter />
      </StateProvider>
    </div>
  );
}

export default App;
