import React from 'react';
import Header from './components/header';
import { Balance } from './components/balance';
import {IncomeExpenses} from './components/incomeExpenses';
import {TransactionList} from './components/transactionList';
import {AddTransaction} from './components/addTransaction';
import { GlobalProvider } from './components/context/GlobalState';
import DoughnutChart from './components/chart';

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <DoughnutChart income={100} expense={50} />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
);
}
export default App;
