
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Post from './components/posts'
import Login from "./components/login";
import Register from './components/register';
import PageNotFound from './components/pageNotFound';
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Admin from './components/admin';
import AdminForm from './components/adminform';
import Author from './components/author';
import AddAuthor from './components/addauthor';
import UpdateAuthor from './components/updateauthor';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/posts" component={Post} />
      <Route path="/admin"  component={Admin}/>
      <Route path="/admins/add" component={AdminForm}/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/author" component={Author}/>
      <Route path="/authors/add" component={AddAuthor}/>
      <Route path="/authors/update/:authorId" component={UpdateAuthor}/>
      <Route exact path="/" component={Home} />
      <Redirect from="/home" to="/" />
      <Route component={PageNotFound} />
    </Switch>
    </div>
  );
}

export default App;