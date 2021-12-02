import React from "react";

const Countries = ({countries, loading}) => {

    if(loading) {
        return <div className="alert alert-primary load" role="alert">
            <h2>Loading...</h2>
        </div>
    }


    return(
        <div className='rows'>
        {countries.map( (item, index) =>
                <div className="card border sections" style={{width: '18rem'}} key={index.toString()}>
                    <img src={item.flags.png} className="card-img-top" alt="flag"/>
                    <div className="card-body">
                        <h3 className="card-title">{item.name.common}</h3>
                        <p className="card-text">Population: {item.population}</p>
                        <p className="card-text">Region: {item.region}</p>
                        <p className="card-text">Capital: {item.capital}</p>
                    </div>
                </div>
             )}
        </div>

    );
}

export default Countries;
