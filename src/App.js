import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import ListWords from './components/ListWords';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ListWords />
    </Provider>
  );
}

export default App;

