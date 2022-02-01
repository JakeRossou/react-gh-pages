// Update once I know more about hooks
import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './PrimeNumbers.css';

function PrimeNumbers() {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const {max} = useParams();
  
  useEffect(() => {
    async function getPrimeNumbers() {
      let response = await axios.get(`/primenumbers/${max}`);
      let responseArray = [...response.data];
      console.log(responseArray);
      setPrimeNumbers(responseArray);
    }
    getPrimeNumbers();
    }, [max]);
  return (
    <div className="PrimeNumbers">
      <p>Please find below all the prime numbers until {max} </p>
      <div className="PrimeNumbers-numbers">
        {primeNumbers.map((i)=> <span>{i}</span>)}
      </div>
    </div>
  )
}
export default PrimeNumbers;