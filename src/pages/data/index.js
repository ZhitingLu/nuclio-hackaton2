import React from 'react';
import CardChina from '../../components/cards/CardChina';
import CardFrance from '../../components/cards/CardFrance';
import "./data.css";
import NewCaseChina from '../../components/charts/ChartChina';

export default function Data() {
    return (
        <div className="data-container">
            <CardChina />
            <CardFrance />
        </div>

    )
};