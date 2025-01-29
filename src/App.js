import logo from './logo.svg';
import './App.css';
import { Contacts } from './components';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
       <Contacts></Contacts>
    </Provider>
  );
}

export default App;
