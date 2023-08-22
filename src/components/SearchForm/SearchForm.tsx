import { useState } from 'react';
import './SearchForm.scss';

function SearchForm() {
  const [isActiveSearchClass, setIsActiveSearchClass] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);

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
    <form
      className='search'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleOnFocusInput}
      onBlur={handleOnBlurInput}
      noValidate>
      <div className={`search__box ${isActiveSearchClass || isActiveInput ? 'search__box_active' : ''}`}>
        <input
          id='search'
          name='search'
          className='search__input'
          type='text'
          placeholder='Поиск'
          minLength={1}
          autoComplete='off'
        /*value={values.search || ''}*/
        />
        <span className={`search__icon ${isActiveInput ? 'search__icon_active' : ''}`} ></span>
      </div>

      <span id='search-input-error' className='search__error'> </span>
    </form>
  );
}

export default SearchForm;
//
