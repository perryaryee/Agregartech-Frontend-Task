// import React from 'react'

// interface Props {
//     label?: string;
// }

// const CustomTextField: React.FC<Props> = ({ label }) => {
//     return (
//         <div className=' py-2 px-3 border  border-[#B4AEAE]'>
//             <h1>{label}</h1>
//             <input className=' w-full text-primary outline-none focus-within:selection:marker:' />
//         </div>
//     )
// }

// export default CustomTextField;


import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const CustomTextField: React.FC<Props> = ({ label, ...inputProps }) => {
    return (
        <div className='py-2 px-3 border border-[#B4AEAE] focus:border focus:border-l-blue-500'>
            {label && <h1>{label}</h1>}
            <input
                {...inputProps}
                className='w-full text-primary outline-none focus:border-l-4'
            />
        </div>
    );
};

export default CustomTextField;
