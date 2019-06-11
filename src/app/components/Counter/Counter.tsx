import Button from "@material-ui/core/Button";
import * as React from "react";
import "./style.css";

interface IProps {
  initialCount?: number;
}

interface IState {
  count: number;
}

const increment = Symbol();
export default class Counter extends React.Component<IProps, IState> {
  public static defaultProps = {
    initialCount: 0,
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: props.initialCount!,
    };
    this[increment] = this[increment].bind(this);
  }
  public [increment] = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  public render() {
    const { count } = this.state;
    document.title = `You clicked ${count} times`;
    return (
      <div className="uni-app--counter">
        <h2>You clicked {count} times</h2>
        <Button variant="contained" onClick={this[increment]}>
          Click me
        </Button>
      </div>
    );
  }
}
