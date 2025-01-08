import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/Theme';
import { UserProvider } from './context/UserContext';
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={defaultTheme}>
          <Theme>
          <Router />

          <GlobalStyle />
          </Theme>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
