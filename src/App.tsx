import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { State } from 'Store';
import { Page } from 'Widget';
import { FieldType, Field } from 'Model';

import './App.css';


function App() {
  const identityOrDefault = (s: State | undefined, a: any) => s ?? new State();
  const initialState = new State();
  const ft: FieldType = { kind: "text", multiLine: true, maxCharacters: 55 };
  initialState.pageContent.content.push(new Field(-14, true, ft, "name", "Please put your name:"));

  const reducer: (s: State | undefined, a: any) => State = identityOrDefault;
  const store = createStore(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Page page={store.getState().pageContent} />
        </Provider>
      </header>
    </div>
  );
}

export default App;