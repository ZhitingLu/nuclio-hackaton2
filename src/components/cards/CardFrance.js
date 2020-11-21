import React,  { useState, useEffect }  from 'react';
import './styles.css';
const urlFrance = 'http://localhost:3001/FRA';
// import ChartFrance from '../charts/ChartFrance';

export default function CardFrance() {
    const [dataFrance, setDataFrance] = useState();
    console.log(dataFrance);

    useEffect(() => {
        const getData = () => {
            fetch(urlFrance).then(response => {
                if (response.status < 400) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then(res => setDataFrance(res))
            .catch(err => console.log(err));
        };

        getData();
    }, []);
    

    return (
        <div className="container">
            <div className="container-country">
                <h2>Life Expectancy</h2>
                {dataFrance !== undefined && (<span>{dataFrance.life_expectancy}</span>)};
              
            </div>

        </div>
    )
};