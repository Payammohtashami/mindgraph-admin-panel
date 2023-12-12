import React, { HTMLInputTypeAttribute } from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';


type SelectorFieldPropsType = {
    isRequired?: boolean,
    name: string,
    disabled?: boolean,
    type?: HTMLInputTypeAttribute,
    label: string,
    errors?: any,
    control: any,
    placeholder?: string,
    options: any,
    isPasswordType?: boolean
};

const Selector: React.FC<SelectorFieldPropsType> = (props) => {
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({field: { onChange, onBlur, value, ref }}) => (
                <div>
                    <label htmlFor={props.name} className="block font-bold leading-6 text-slate-900 dark:text-slate-100">
                        {props.label}
                        {props.isRequired &&
                            <span className='text-xs text-red-500 font-medium'>
                                {' '} ( required )
                            </span>
                        }
                    </label>
                    <Autocomplete
                        ref={ref}
                        value={value}
                        onBlur={onBlur}
                        onChange={(event, item) => onChange(item)}
                        disablePortal
                        getOptionLabel={(option) => option}
                        isOptionEqualToValue={(option, value) =>  option === value}
                        options={props.options}
                        renderInput={(params) => 
                            <TextField
                                {...params}
                                id={props?.name}
                                disabled={props?.disabled}
                                name={props?.name}
                                error={!!props?.errors?.[props.name]}
                                placeholder={props.placeholder}
                                autoComplete={props.name}
                                className={`[&>.MuiInputBase-root]:rounded-xl [&>.MuiInputBase-root>.MuiAutocomplete-endAdornment>.MuiButtonBase-root]:dark:!text-white !mt-1 block w-full bg-slate-100 dark:bg-gray-700 rounded-xl [&>.MuiInputBase-root]:border-none !border-none px-3.5  [&>.MuiInputBase-root]:!py-[5px] [&>.MuiInputBase-root]:!text-slate-700 [&>.MuiInputBase-root]:dark:!text-slate-100 ring-0 ring-inset [&>.MuiInputBase-root]:placeholder:!text-gray-400 [&>.MuiInputBase-root]:placeholder:dark:!text-gray-100 [&>.MuiInputBase-root]:focus:ring-0 sm:text-sm sm:leading-6`}
                            />
                        }
                    />
                    {props?.errors?.[props.name] ? 
                        <div>
                            <p className='text-xs font-medium mt-1 text-red-500'>{props?.errors?.[props.name]?.message}</p>
                        </div>
                        : null
                    }
                </div>
            )}
        />
    );
};

export default Selector;