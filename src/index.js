import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "."
import registerServiceWorker from './registerServiceWorker';
import App from "./App.js";

ReactDOM.render(

        <div>
            {/*<div>*/}
                {/*<Header />*/}
                {/*<Nav />*/}
                    {/*<Route path="/index" component={Content}/>*/}
                    {/*<Route path="/profile/:bangumiId" component={Profile}/>*/}
                    {/*<Route path="/from/:bangumiId" component={Form}/>*/}
            {/*</div>*/}
            <App/>
        </div>
  ,
    document.getElementById('root'));
registerServiceWorker();
