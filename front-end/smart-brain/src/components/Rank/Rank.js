import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3 grow'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1 grow'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;