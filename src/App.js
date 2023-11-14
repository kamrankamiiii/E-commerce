import { Counter } from './features/counter/Counter';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetailPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  { 
    path: '/cart',
    element: <CartPage></CartPage>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  { 
    path: '/checkout',
    element: <Checkout></Checkout>,
  },
  { 
    path: '/product-detail',
    element: <ProductDetail></ProductDetail>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;