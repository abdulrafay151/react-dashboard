import React from 'react';

const SignupUserTable = ({ columns, usersData }) => {
    return (
        <div className=''>
            <div className='px-12 py-4 bg-cyan-600 text-white text-3xl '>SignupUserTable</div>
            <div className='flex justify-center w-100'>
            <table className=''>
                <thead className='bg-blue-400'>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} className="p-2 w-[440px] border border-2 border-y-black border-x-black">{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user) => (
                        <tr key={user.id}>
                            {columns.map((column) => (
                                <td key={column.key} className="text-center bg-blue-200 py-1 border border-2 border-black w-auto">{user[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
                    </div>
        </div>
    );
};

export default SignupUserTable;
