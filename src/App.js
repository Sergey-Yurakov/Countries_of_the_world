import './App.css';
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";
import Headers from "./components/Headers";
import Footer from './components/Footer';
import FilterData from "./components/FilterData";

import React, {useState, useEffect, createRef} from "react";
import axios from "axios";

function App() {
    const inp = createRef();
    const [style, setStyle] = useState('');
    const [dataSearch, setDataSearch] = useState('none');

    const [valueInput, setValueInput] = useState('');

    const [countries, setCountries] = useState([]); //данные
    const [loading, setLoading] = useState(false); //загрузка
    const [currentPage, setCurrentPage] = useState(1); //текущаю страница
    const [countriesPerPage] = useState(9); //колв-во элементов на странице

    useEffect( () => {
        const getCountries = async() => {
            setLoading(true);
            const res = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(res.data);
            setLoading(false);
            // console.log(res.data);
        }
        getCountries();
    },[] )

    const filteredCountries = countries.filter( item => {
        return item.name.common.toLowerCase().includes(valueInput.toLowerCase());
    })

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber); //пагинация на странице


   let inputHandler = (e) => {
        console.log(e.target.value);
        let val = e.target.value.trim();
        setValueInput(val);
        if(val === '') {
            setStyle('');
            setDataSearch('none');

        }
        else {
            setStyle('none');
            setDataSearch('');
        }
    }




  return (
      <>
        <Headers/>
            <div className="container mt-5">
                <h1 className="text-primary mt-5">Countries</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Search in the country</label>
                        <input
                            type="email"
                            className="form-control"
                            onInput={inputHandler}
                            ref={inp}/>
                    </div>
                </form>

                <div className={style}>
                    <Countries
                        countries={currentCountry}
                        loading={loading}/>
                    <Pagination
                        countriesPerPage={countriesPerPage}
                        totalCountries={countries.length}
                        paginate={paginate}/>
                </div>
                <div className={dataSearch}>
                    <FilterData filteredCountries={filteredCountries}/>
                </div>

            </div>
        <Footer/>
      </>
  );
}

export default App;
