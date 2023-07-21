import React, {FC} from 'react';
import './App.css';
import { Header } from './components/header/Header';
import {headerSectionData} from "./data/pageData";
import { Footer } from './components/footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
