import Button from "@material-ui/core/Button";
import { CSSProperties } from "@material-ui/styles";
import * as React from "react";
import "./style.css";

interface IProps {
  initialCount?: number;
}

const style: CSSProperties = { "background-color": "blue" };

const Counter = ({ initialCount = 0 }: IProps) => {
  const [count, setCount] = React.useState(initialCount);
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const increment = () => setCount(count + 1);

  return (
    <div className="uni-app--counter">
      <h2 style={style}>You clicked {count} times</h2>
      <Button variant="contained" onClick={increment}>
        Click me
      </Button>
    </div>
  );
};

export default Counter;
