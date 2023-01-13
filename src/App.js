import './i18n'
import "./assets/style/main.scss";

import React, {Suspense, useEffect} from 'react'

import {Provider} from 'react-redux'
import i18next from 'i18next';
import store from './core/store/store/store';

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={
                <></>
            }>
                <div className="App"></div>
            </Suspense>
        </Provider>
    );
}

export default App;
