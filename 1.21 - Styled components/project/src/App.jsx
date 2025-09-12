import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import { PostCard } from "./components/PostCard";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { constants } from "./styles/constants";

function App() {
  const [isDark, setIsDark] = useState(false);

  const Container = styled.div`
    width: 100%;
    max-width: ${constants.container.size + constants.container.paddingX * 2}px;
    margin: 0 auto;
    padding: 0 ${constants.container.paddingX}px;
  `;

  return (
    <Container>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* Глобальные стили */}
        <GlobalStyles />

        <Header toggleTheme={() => setIsDark(prev => !prev)} />

        <PostCard
          title="Styled Components"
          content="Пример переключение тем"
        />
      </ThemeProvider>
    </Container>
  )
}

export default App
