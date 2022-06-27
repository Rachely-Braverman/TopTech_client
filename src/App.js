import React from 'react';
import BasicButtonGroup from './Menu';
import { Route, Routes } from 'react-router';
import Manager from './Manager';
import Worker from './Worker';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Customer from './Customer';
import logo from "./images/logo.jpg"
import EmployeeTable from './components/employeeTable';
import CustomerService from './CustomerService';

function App() {

  return (
    <>

      <img src={logo} alt="logo" className="App-logo" />
      <Routes>
        <Route path="/" element={<BasicButtonGroup />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/employee" element={<EmployeeTable />} />
        <Route path="/customerService" element={<CustomerService />} />
      </Routes>
    </>
  );

}

export default App;
