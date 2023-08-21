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
    // <section className={`search ${isOpenPopupSearch ? 'search_type_popup' : ''}`} >
      <form
className='search'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleOnFocusInput}
        onBlur={handleOnBlurInput}
        onSubmit={onSearch}
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
      
    // </section>
  );
}

export default SearchForm;
//
