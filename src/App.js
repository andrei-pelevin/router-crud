import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewPost from './components/NewPost/NewPost';
import PostsList from './components/postsList/PostsList';
import ShowPost from './components/ShowPost/ShowPost';
import EditPost from './components/EditPost/EditPost';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
      <Route path="/" exact component={PostsList} />
      <Route path="/posts/new" exact component={NewPost} />
      <Route path="/edit" exact render={props => <EditPost {...props} />} />
      <Route path="/posts/:id([0-9]+)"  render={props => <ShowPost {...props} />} />
      </div>
    </Router>

  );
}

export default App;
