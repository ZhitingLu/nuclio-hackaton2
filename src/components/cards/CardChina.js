import React,  { useState, useEffect }  from 'react';
import './styles.css';
import ChartChina from "../charts/ChartChina";
const urlChina = 'http://localhost:3001/CHN';

export default function CardChina() {
    const [dataChina, setDataChina] = useState();
    console.log(dataChina);

    useEffect(() => {
        const getData = () => {
            fetch(urlChina).then(response => {
                if (response.status < 400) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then(res => setDataChina(res))
            .catch(err => console.log(err));
        };

        getData();
    }, []);
    

    return (
        <div className="container">
            <div className="container-country">
                <h2>Human Development Index - China</h2>
                {dataChina !== undefined && (<span>{dataChina.human_development_index}</span>)}
                {dataChina !== undefined && (<ChartChina chinaData={dataChina}/>)}
            </div>
            
        </div>
    )
};