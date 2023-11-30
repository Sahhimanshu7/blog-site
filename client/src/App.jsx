import './assets/global.css';
import { Header } from './components/head/Header';
import { Pages } from './pages/index';

function App() {
  return (
    <div className = 'main'>
      <Header />
      <Pages />
    </div>
  )
}

export default App
