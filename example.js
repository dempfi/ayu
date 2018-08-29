const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

/**
 * Multiline comment
 */
class X {
  static props = {
    foo: 1
  };

  state = {
    bar: false
  };

  constructor(a, b) {
    console.log({a, b});
  }

  test(a, b) {
		console.log({a, b});
	}

  foo = () => this.test;
}

// TODO: some comment
const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
