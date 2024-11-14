import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store }>
    <div className="App">
      {/* <h1 className='bg-red-200'>You Tube</h1> */}
      <Head/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
