import React from 'react'
import DevAutocomplete from './dev-autocomplete';

const DevAutocompleteUsage = () => {
  const fruits = [
    { id: 1, value: 'Apple' },
    { id: 2, value: 'Apricot' },
    { id: 3, value: 'Avocado' },
    { id: 4, value: 'Banana' },
    { id: 5, value: 'Blackberry' },
    { id: 6, value: 'Blueberry' },
    { id: 7, value: 'Cherry' },
    { id: 8, value: 'Cantaloupe' },
    { id: 9, value: 'Coconut' },
    { id: 10, value: 'Date' },
    { id: 11, value: 'Dragonfruit' },
    { id: 12, value: 'Durian' },
    { id: 13, value: 'Elderberry' },
    { id: 14, value: 'Eggplant' },
    { id: 15, value: 'Fig' },
    { id: 16, value: 'Feijoa' },
    { id: 17, value: 'Figs' },
    { id: 18, value: 'Grape' },
    { id: 19, value: 'Grapefruit' },
    { id: 20, value: 'Guava' },
    { id: 21, value: 'Honeydew' },
    { id: 22, value: 'Huckleberry' },
  ];

  return (
    <DevAutocomplete items={fruits} />
  );
}

export default DevAutocompleteUsage;
