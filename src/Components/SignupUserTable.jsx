import React from 'react';

const SignupUserTable = ({ columns, usersData }) => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="text-center py-6 bg-cyan-600 text-white text-3xl font-semibold rounded-t-lg shadow-lg">
                Signup User Table
            </div>
            <div className="overflow-x-auto flex justify-center mt-4">
                <table className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-cyan-500 text-white">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="p-4 text-center font-semibold text-sm uppercase border border-gray-500">
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, index) => (
                            <tr
                                key={user.id}
                                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className="p-4 text-center text-gray-700 border border-gray-500">
                                        {user[column.key]}
                                    </td>
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
