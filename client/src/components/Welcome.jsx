import React, {useContext} from 'react'
import { Button, Breadcrumb, Form } from 'react-bootstrap'
import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from '.';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from "../utils/shortenAddress";
import { VscDebugDisconnect } from "react-icons/vsc";

const Welcome = () => {
  const {currentAccount, disconnectWallet, connectWallet, formData, handleChange, sendTransaction, isLoading} = useContext(TransactionContext);
  let {addressTo, amount, keyword, message} = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  
  return (
    <div className="d-flex w-100 justify-content-evenly align-items-center flex-wrap mt-5 pb-4">
      <div style={{maxWidth:'97%'}}>
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto <br /> across the world
        </h1>
        <p className="mt-2 text-white">
          Explore the crypto world. Buy and sell cryptocurrencies easily on Alypto.
        </p>
        {!currentAccount ? 
        <Button onClick={connectWallet} className="d-flex justify-content-center align-items-center w-100" variant="primary"><AiFillPlayCircle className="me-2" />Connect Wallet</Button>
        : <Button onClick={disconnectWallet} className="d-flex justify-content-center align-items-center w-100" variant="danger"><VscDebugDisconnect className="me-2" />Disconnect Wallet</Button>
        }
        <div className="mt-4 mb-5">
          <Breadcrumb style={{fontSize:"22px"}}>
            <Breadcrumb.Item active style={{color:'#c4c2c2'}}>Blockchain</Breadcrumb.Item>
            <Breadcrumb.Item active style={{color:'#c4c2c2'}}>Ethereum</Breadcrumb.Item>
            <Breadcrumb.Item active style={{color:'#c4c2c2'}}>Web 3.0</Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb style={{fontSize:"22px"}}>
            <Breadcrumb.Item active style={{color:'#c4c2c2'}}>Reliability</Breadcrumb.Item>
            <Breadcrumb.Item active style={{color:'#c4c2c2'}}>Low fees</Breadcrumb.Item>
            <Breadcrumb.Item active style={{color:'#c4c2c2'}}>Security</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div>
        {/* ETH CARD */}
        <div style={{height:'200px', width:'400px'}} className='eth-card white-glassmorphism p-2'>
          <div className="d-flex justify-content-between text-white">
            <div className="d-flex justify-content-center align-items-center" style={{zIndex:'11', border:'2px solid', borderRadius:'50px', width:'40px', height:'40px', fontSize:'22px'}}>
              <SiEthereum />
            </div>
            <BsInfoCircle style={{fontSize:'20px'}}/>
          </div>
          <div style={{margin: '52px 0 0 5px'}} className="text-white">
            <p style={{fontSize:'20px'}}>{shortenAddress(currentAccount)}</p>
            <p style={{fontWeight:'600', fontSize:'30px'}}>Ethereum</p>
          </div>
        </div>

        {/* FORM */}
        <div className='mt-4 blue-glassmorphism'>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control onChange={handleChange} name="addressTo" value={addressTo} placeholder="Address To" style={{background:'#ffff', borderColor:'#ffff'}}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control onChange={handleChange} name="amount" value={amount} style={{background:'#ffff', borderColor:'#ffff'}} placeholder="Amount" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control onChange={handleChange} name="keyword" value={keyword} style={{background:'#ffff', borderColor:'#ffff'}} placeholder="Keyword" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control onChange={handleChange} name="message" value={message} style={{background:'#ffff', borderColor:'#ffff'}} placeholder="Enter Message" />
              </Form.Group>
              <div style={{background:'gray', width:'100%', height:'2px'}} />
              {isLoading ? <div className='text-center mt-3'><Loader /></div> : (<Button type="submit" className='btn_submitnow w-100 mt-3' onClick={handleSubmit}>Send Now</Button>)}
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Welcome