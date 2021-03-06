import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Card } from '../../components/Card';
import Header from '../../components/Header';

const History = () => {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('history')));
  const handleClear = () => {
    localStorage.removeItem('history');
    setData([]);
  };

  return (
    <>
      <div className="history">
        <div className="container">
          <Header />
          <div className="history-wraper">
            <div className="history-header mb-3">
              <h3 className="title">Watch History</h3>
              <button className="history-clean_btn pointer" onClick={handleClear}>
                <FaTrash />
                <span>Clean</span>
              </button>
            </div>
            <div className="grid grid-col-5 gap-15">
              {data?.map((i, idx) => {
                console.log(i);
                return <Card key={idx} data={i?.data} category={i?.cate} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
