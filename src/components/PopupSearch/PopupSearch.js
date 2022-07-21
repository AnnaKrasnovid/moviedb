import React from 'react';
import Popup from '../Popup/Popup';
import SearchForm from '../SearchForm/SearchForm';

function PopupSearch({ isOpenPopupSearch, onClosePopup }) {
  return (
    <Popup isOpenPopupSearch={isOpenPopupSearch} onClosePopup={onClosePopup}>
      <SearchForm isOpenPopupSearch={isOpenPopupSearch} />
    </Popup>
  );
}

export default PopupSearch;
