import * as React from 'react';
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material/";
import { allProducts } from "../productsData";
import Link from 'next/link';

export default function SearchBar() {
    return (
        <Autocomplete
            className="basis-1/3 self-center border-none"
            id="search"
            freeSolo
            options={allProducts} // Pass the raw product data
            getOptionLabel={(option) => option.title || ""} // Ensure titles are displayed
            renderInput={(params) => <TextField {...params} label="All products searchbar" />}
            renderOption={(props, option) => (
                <Link
                    aria-label={`View details for ${option.title} in ${option.productCategory} ${option.subCategory}`}
                    href={`/shop/${option.productCategory}/${option.subCategory}/${option.productId}`}
                >
                    <li {...props}>
                        {option.title}
                    </li>
                </Link>
            )}
        />
    );
}
