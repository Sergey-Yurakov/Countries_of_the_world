import React, {useState} from "react";

const Pagination = ({countriesPerPage, totalCountries, paginate}) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    // pageNumbers.map( item => console.log(item) );

    const [active, setActive] = useState('page-link');

    let clickPaginate = (e) => {

        // console.log(e);
        //  console.log(e.target.getAttribute('data-set'));
        //  if(e.target.getAttribute('data-set')) {
        //      setActive(' page-link')
        //  }
        //  else {
        //      setActive(' page-link')
        //  }

    }


  return(
      <div className="row justify-content-evenly">
          <div className="col">
              <ul className="pagination" onClick={clickPaginate}>
                  {pageNumbers.map( item => (
                      <li className="page-item" key={item}>
                          <a href="#" className={active} onClick={ () => paginate(item) } data-set={item}>
                              {item}
                          </a>
                      </li>
                  ) )}
              </ul>
          </div>
      </div>


  );
}

export default Pagination;