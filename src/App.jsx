import { Route, Routes } from 'react-router-dom';
import Order from './components/order/Order';
import Layout from './components/layout/Layout';
import SignIn from './components/signin/SignIn';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='' element={ <Order /> }></Route>
          <Route path='login' element={ <SignIn /> }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
