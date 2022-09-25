import { Route, Routes } from 'react-router-dom';
import { Checkout } from './components/Checkout/Checkout';
import { Home } from './components/Home';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}
