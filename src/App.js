import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login_Register from './Pages/Login_Register';
import { QueryClient, QueryClientProvider } from 'react-query';
import Favourites from './Pages/Favourites';
import WatchLater from './Pages/WatchLater';
import SelectedMovie from './Pages/SelectedMovie';
import AdminDashboard from './Pages/AdminDashboard';
import Filtered from './Pages/Filtered';


const queryClient = new QueryClient();


function App() {

  return (
    <div className='body'
      style={{ margin: 0, padding: 0 }}
    >

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login_Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/watchLater" element={<WatchLater />} />
            <Route path="/selectedMovie" element={<SelectedMovie />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/filtered" element={<Filtered />} />
          </Routes>
        </BrowserRouter>

      </QueryClientProvider>
    </div>
  );
}

export default App;

