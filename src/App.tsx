import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Card from "./Card";
import { fib } from "./utils";

function App() {
  const [selected, setSelected] = useState(-1);
  const [dat, setData] = useState<{ [key: string]: number }>({
    me: -1,
    you: 8,
  });

  const list = fib(12);
  list[0] = 0.5;
  return (
    <div className="App">
      <div className="container mx-auto border-4 border rounded overflow-hidden shadow-lg p-5">
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
          {list.map((i, idx) => (
            <Card
              onClick={() => {
                setSelected(i);
                setData({ ...dat, me: i });
              }}
              key={idx}
              text={i}
              size="small"
            ></Card>
          ))}
        </div>
      </div>
      <hr className="m-5"></hr>
      <div className="container p-5">
        <Button>VOTE</Button>
      </div>
      <hr className="m-5"></hr>
      <div className="container mx-auto border-4 border rounded overflow-hidden shadow-lg p-5">
        <div className="gap-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
          {Object.keys(dat).map((d) => (
            <Card key={d} text={dat[d]} size="small"></Card>
          ))}
        </div>
      </div>
      <hr className="m-5"></hr>
      <div className="container mx-auto border-4 border rounded overflow-hidden shadow-lg p-5">
        <p>
          {"avg: "}
          {Object.keys(dat).length === 0
            ? 0
            : Object.keys(dat).reduce(
                (p, c) => (dat[c] === -1 ? p : p + dat[c]),
                0
              ) / Object.keys(dat).length}
        </p>
      </div>
    </div>
  );
}

export default App;
