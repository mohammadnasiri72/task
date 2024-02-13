import * as React from 'react';
import NavBar from './component/task/component/navBar/navBar';
import Table from './component/task/component/table/table';
import Dashboard from './component/task/component/dashboard/dashboard';


export default function App() {
  return (
    <>
     <NavBar />
        <div className='flex'>
            <div className='w-3/4'>
                <Table />
            </div>
            <div className='w-1/4'>
                <Dashboard/>
            </div>
        </div>
      
    </>
  );
}