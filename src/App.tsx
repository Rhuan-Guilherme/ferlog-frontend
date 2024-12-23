import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/Theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
