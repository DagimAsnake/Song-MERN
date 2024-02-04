import React from 'react';
import TotalStat from './TotalStat';
import FirstStat from './FirstStat';
import SecondStat from './SecondStat';
import ThirdStat from './ThirdStat';

const Statistics: React.FC = () => {
  return (
    <div className='container max-w-screen-lg mx-auto px-4 py-8'>
      <TotalStat />

      <div className='mt-16'>
        <FirstStat />
      </div>

      <div className='mt-16'>
        <SecondStat />
      </div>

      <div className='mt-16'>
        <ThirdStat />
      </div>
    </div>
  );
};

export default Statistics;
