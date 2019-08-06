import * as React from 'react';
import logo from './logo.svg';
import './App.less';
import * as css from './App.modules.less';
import { subscribe, wapper } from 'resa';
import AppModel from './AppModel';

interface AppProps {
  appModel: AppModel; // annotation type, will inject by connect
}

class AppInner extends React.Component<AppProps, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className={css.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <p>version: {process.conf.version}</p>
          <h1>{this.props.appModel.state.count}</h1>
          {/* add and addAsync have been transformed to action creaters,
            you just call them with arguments(type check payload)
        */}
          <button onClick={() => this.props.appModel.add(1)}>+</button> {/* type check here */}
          <button onClick={() => this.props.appModel.addAsync(2)}>async</button> {/* type check here */}
          <button
            onClick={() =>
              wapper(this.props.appModel.addAsync(2)).then(() => {
                alert('callback');
              })
            }>
            promise
          </button>
        </header>
      </div>
    );
  }
}

const App = subscribe({ appModel: AppModel })(AppInner);
export default App;
