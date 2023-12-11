import React, { HTMLInputTypeAttribute, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField as TextFieldComponent } from '@mui/material';
import { Controller } from 'react-hook-form';

type TextFieldPropsType = {
    isRequired?: boolean,
    name: string,
    disabled?: boolean,
    type?: HTMLInputTypeAttribute,
    label: string,
    errors?: any,
    control: any,
    placeholder?: string,
    isPasswordType?: boolean
};

const TextField: React.FC<TextFieldPropsType> = (props) => {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const passwordTuggle = () => {
        if(!props.isPasswordType) return;
        setShowPassword(!showPassword);
    };
    return (
            <Controller
                name={props.name}
                control={props.control}
                render={({field: { onChange, onBlur, value, ref }}) => (
                    <div>
                        <label htmlFor={props.name} className="block font-medium leading-6 text-slate-900 dark:text-slate-100">
                            {props.label}
                            {props.isRequired &&
                                <span className='text-xs text-red-500 font-medium'>
                                    {' '} ( required )
                                </span>
                            }
                        </label>
                        <div className="mt-1">
                            <TextFieldComponent
                                id={props.name}
                                ref={ref}
                                disabled={props?.disabled}
                                size="small"
                                type={props.isPasswordType ? showPassword ? 'text' : 'password' : props?.type ?? 'text'}
                                name={props.name}
                                error={!!props?.errors?.[props.name]}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                placeholder={props.placeholder}
                                autoComplete={props.name}
                                InputProps={{
                                    endAdornment: (
                                        props?.isPasswordType ? 
                                            (
                                                <IconButton sx={{mx: 1, p: 0.6}} onClick={passwordTuggle}>
                                                    {showPassword ? <VisibilityOff sx={{fontSize: 18}} /> : <Visibility sx={{fontSize: 18}} />}
                                                </IconButton>
                                            )
                                        :
                                        null
                                    )
                                }}
                                className={`[&>.MuiInputBase-root]:rounded-xl [&>.MuiInputBase-root>.MuiButtonBase-root]:dark:!text-gray-300 block w-full bg-slate-100 dark:bg-gray-700 rounded-xl [&>.MuiInputBase-root]:border-none !border-none px-3.5  [&>.MuiInputBase-root]:py-1 [&>.MuiInputBase-root]:text-slate-700 [&>.MuiInputBase-root]:dark:text-slate-100 ring-0 ring-inset [&>.MuiInputBase-root]:placeholder:text-gray-400 [&>.MuiInputBase-root]:placeholder:dark:text-gray-100 [&>.MuiInputBase-root]:focus:ring-0 sm:text-sm sm:leading-6`}
                            />
                        </div>
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

export default TextField;