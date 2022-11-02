import "./App.css";
import Card from "./Card";
import { fib } from "./utils";

function App() {
  const list = fib(12);
  list[0] = 0.5;
  return (
    <div className="App">
      <div className="container mx-auto border-4 border rounded overflow-hidden shadow-lg p-5">
        <div className="gap-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
          {list.map((i, idx) => (
            <Card key={idx} text={i} size="small"></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
