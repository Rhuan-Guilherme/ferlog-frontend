import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/Theme';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />

          <GlobalStyle />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
