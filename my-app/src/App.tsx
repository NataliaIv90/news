import React, {FC} from 'react';
import './App.css';
import { Header } from './components/header/Header';
import {headerSectionData} from "./data/pageData";

// interface IHeaderData {
//   data
// }

export const App:FC =() => {
  return (
    <div className="App">
      <Header 
         navigationData={headerSectionData.data.navigationData}
         searchInputData={headerSectionData.data.searchInputData}
      />
    </div>
  );
}

export default App;
