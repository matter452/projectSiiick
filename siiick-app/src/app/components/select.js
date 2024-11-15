'use client'
import { useState } from 'react';

function SelectionList({ options }){
    return options.map((selectOption) => (<option key={selectOption.value} value={selectOption.value} className='text-black'>{selectOption.name}</option>));
}

export default function Select({options, selectedValue, className}){
    const [selection, setSelection] = useState('Sort by')

    const handleSelection = (e) => {
        setSelection(e.target.value)
        selectedValue(e.target.value)
    };
    
    return (
        <div className={className}>
        <label for="sort by" className='sr-only'>Sort by</label>
        <select value={selection} onChange={handleSelection} className='text-black' name='sort by'>
            <option value='' selected hidden>Sort by</option>
            <SelectionList options={options} />
        </select>
        </div>
    )
}