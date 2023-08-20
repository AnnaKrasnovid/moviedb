import {useState} from 'react';
import './SearchForm.scss';

interface  SearchFormInt {
  isOpenPopupSearch: Boolean,
  onSearch: ()=> void
}

function SearchForm({ isOpenPopupSearch, onSearch }: SearchFormInt) {
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
          minLength={1}
          autoComplete='off'
        /*value={values.search || ''}*/
        />
        <span className={`search__button ${isActiveInput ? 'search__button_active' : ''}`} ></span>
      </form>
      <span id='search-input-error' className='search__error'></span>
    </section>
  );
}

export default SearchForm;
//
