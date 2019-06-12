import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import "./style.css";

interface IProps {
  initialCount?: number;
}

const Counter = ({ initialCount = 0 }: IProps) => {
  const [count, setCount] = React.useState(initialCount);
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const increment = () => setCount(count + 1);

  return (
    <div className="byop-app--counter">
      <Typography variant="h3">
        You clicked{" "}
        <span data-testid="byop-app--counter-count-value">{count}</span> times
      </Typography>

      <Button
        className="byop--app-counter-button"
        data-testid="byop-app--counter-button"
        variant="contained"
        color="primary"
        onClick={increment}>
        Click me
      </Button>
    </div>
  );
};

export default Counter;
