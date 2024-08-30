
import React from 'react';

interface Props {
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    type?: string;
}

const CustomTextField: React.FC<Props> = ({
    label,
    value,
    onChange,
    placeholder,
    name,
    type = 'text',
}) => {
    return (
        <div className='py-2 px-3 border border-[#B4AEAE] focus-within:border-l-4 focus-within:border-l-primary'>
            {label && <p className='text-secondary'>{label}</p>}
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                className='w-full text-primary outline-none'
            />
        </div>
    );
}

export default CustomTextField;
