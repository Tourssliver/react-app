import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link}from "react-router-dom";
import { Layout } from 'antd';



const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
       <Router>
        <div>
        <Layout>
          <Header>
            <Link to="/login">登录</Link>
            <Link to="/admin">主页</Link>
          </Header>
          <Content>
          <Switch>
            {/* <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/admin" component={Admin} /> */}
          </Switch>
          </Content>
        </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;
