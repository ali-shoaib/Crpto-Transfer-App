import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Container } from 'react-bootstrap';
import { shortenAddress } from "../utils/shortenAddress";

const Transactions = () => {
  const {transactions, currentAccount} = useContext(TransactionContext);
  
  return (
    <div className='gradient-bg-transactions pt-5 pb-4'>
      <Container>
        {currentAccount ? <h3 className='text-gradient text-center mb-4'>Latest Transactions ({transactions.length})</h3> : <h3 className='text-gradient text-center mb-4'>Connect your account to see the latest transactions</h3>}
        
        <div className="d-flex align-items-center justify-content-evenly flex-wrap">          
          {transactions.map(tran => (
            <div className='transactionCard'>
              <h5>From: <b>{shortenAddress(tran.addressFrom)}</b></h5>
              <h5>To: <b>{shortenAddress(tran.addressTo)}</b></h5>
              <h5>Amount: <b>{tran.amount} ETH</b></h5>
              <br/>
              <br/>
              <h6>Message: <b>{tran.message}</b></h6>
              <div className='transactions_timestamp'>{tran.timestamp}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Transactions