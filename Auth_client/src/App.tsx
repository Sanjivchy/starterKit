import AppRoutes from './route/route';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import "./i18n";

function App() {
  return (
    <main>
      <BrowserRouter >
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </main>
  );
}

export default App;
