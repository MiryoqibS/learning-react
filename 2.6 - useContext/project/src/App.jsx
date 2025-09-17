// == Контексты ==
import { ThemeProvider } from "./contexts/ThemeContext";
import { TodoProvider } from "./contexts/TodoContext";
import { UserProvider } from "./contexts/UserContext";

// == Компоненты ==
import { Header } from "./components/Header";
import { TodoContainer } from "./components/TodoContainer";

function App() {

  return (
    <ThemeProvider>
      <TodoProvider>
        <UserProvider>
          <div className="container mx-auto flex flex-col gap-8">
            <Header />
            <TodoContainer />
          </div>
        </UserProvider>
      </TodoProvider>
    </ThemeProvider>
  )
};

export default App;
