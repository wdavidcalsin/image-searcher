import { ThemeContextProvider } from 'mui-theme-pack';
import { Provider } from 'react-redux';
import './App.css';
import { Home } from './page';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider nameTheme="navy-blue">
        <Home />
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
