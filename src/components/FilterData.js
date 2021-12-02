
function FilterData(props) {
    return(
        <div className='rows'>
            {props.filteredCountries.map( (item, index) =>
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

export default FilterData;