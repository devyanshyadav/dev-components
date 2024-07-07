import React from 'react'
import DevAutocomplete from './dev-autocomplete';

const DevAutocompleteUsage = () => {
  const fruits = [
    'Apple',
    'Apricot',
    'Avocado',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Cantaloupe',
    'Coconut',
    'Date',
    'Dragonfruit',
    'Durian',
    'Elderberry',
    'Eggplant',
    'Fig',
    'Feijoa',
    'Figs',
    'Grape',
    'Grapefruit',
    'Guava',
    'Honeydew',
    'Huckleberry'
    ];

  return (
    <div className='w-52 p-2 bg-slate-50 space-y-2 dark:bg-slate-900 border border-cyan-500/50 rounded-lg'>
      <h2>Search Fruits</h2>
      <DevAutocomplete items={fruits} />
    </div>
  )
}

export default DevAutocompleteUsage

