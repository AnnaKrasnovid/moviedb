import React from 'react';
import './SearchForm.css';
/*import useFormValidation from '../../hooks/useFormValidation';
import { useLocation } from 'react-router-dom';*/

function SearchForm({ isOpenPopupSearch, onSearch }) {
  const [isActiveSearchClass, setIsActiveSearchClass] = React.useState(false);
  const [isActiveInput, setIsActiveInput] = React.useState(false);

  function handleMouseEnter() {
    setIsActiveSearchClass(true);
  }

  function handleMouseLeave() {
    setIsActiveSearchClass(false);
  }

  function handleOnFocusInput() {
    setIsActiveInput(true);
  }

  function handleOnBlurInput() {
    setIsActiveInput(false);
  }

  return (
    <section className={`search ${isOpenPopupSearch ? 'search_type_popup' : ''}`} >
      <form
        className={`search__form ${isActiveSearchClass || isActiveInput ? 'search__form_active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleOnFocusInput}
        onBlur={handleOnBlurInput}
        onSubmit={onSearch}
        noValidate>
        <input
          id='search'
          name='search'
          className='search__input'
          type='text'
          placeholder='Фильм'
          minLength='1'
          autoComplete='off'
        /*value={values.search || ''}*/
        />
        <button className={`search__button ${isActiveInput ? 'search__button_active' : ''}`} type='submit' />
      </form>
      <span id='search-input-error' className='search__error'></span>
    </section>
  )
}

export default SearchForm;
//
