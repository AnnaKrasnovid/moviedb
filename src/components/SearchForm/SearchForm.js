import React from 'react';
import './SearchForm.css';
/*import useFormValidation from '../../hooks/useFormValidation';
import { useLocation } from 'react-router-dom';*/

function SearchForm() {

  return (
    <section className='search'>
      <form className="search__form" noValidate>
        <input
          id="search"
          name="search"
          className="search__input"
          type="text"
          placeholder="Фильм"
        /*value={values.search || ''}*/
        />
        <button className="search__button"></button>
      </form>
      <span id='search-input-error' className='search__error'></span>
    </section>
  )
}

export default SearchForm;
