import { Fname } from "./src/App";

export default function Component_C() {
  return (
    <div>
      <Fname.Consumer>
        {(name) => {
          return <h1>My name is MS {name}</h1>;
        }}
      </Fname.Consumer>
    </div>
  );
}
