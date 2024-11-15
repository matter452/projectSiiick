import * as React from 'react';
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material/";
import { allProducts } from "../productsData";

export default function SearchBar(){

    return (<Autocomplete className='basis-1/3 self-center border-none' id="search" freeSolo options={allProducts.map((option) => option.title)} renderInput={(params) => <TextField {...params} label="Search" />} />)

}