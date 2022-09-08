import React from 'react';
import { Input } from 'components/common/InputStyled';
import { FilterLabel } from './FilterStyled';
import { filterContacts } from 'redux/contacts/contactsActions';
import {getFilterValue} from 'redux/contacts/contactSelectors'
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handlerFilter = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <div>
      <FilterLabel htmlFor="filter"> Find contacts by name </FilterLabel>
      <Input
        type="text"
        name="filter"
        placeholder="Search contact"
        value={filter}
        onChange={handlerFilter}
      />
    </div>
  );
};

export default Filter;


