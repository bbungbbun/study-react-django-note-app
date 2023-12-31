import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact Component={NotesListPage}/>
      </div>
    </Router>
  );
}

export default App;
