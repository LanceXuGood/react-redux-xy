import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import DoList from './components/Do';
import ToDo from './components/ToDo';
class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base">
                <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/dolist">DoList</Link></li>
                    <li><Link to="/todo">TodoList</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route exact path="/dolist" component={DoList}/>
                <Route exact path="/todo" component={ToDo}/>
            </div>
        )
    }
}
Index.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Index;
