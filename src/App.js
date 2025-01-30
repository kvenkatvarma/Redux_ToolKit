import logo from './logo.svg';
import './App.css';
import { Contacts, Navbar } from './components';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
       <Contacts></Contacts>
    </Provider>
  );
}

export default App;
