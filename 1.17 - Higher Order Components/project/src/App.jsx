import './App.css'
import { Button } from './components/Button'
import { Link } from './components/Link';
import { withClickCounter } from './hocs/withClickCounter'

function App() {

  const ButtonWithCounter = withClickCounter(Button);
  const LinkWithCounter = withClickCounter(Link);

  return (
    <>
      <ButtonWithCounter />
      <LinkWithCounter />
    </>
  );
};

export default App
