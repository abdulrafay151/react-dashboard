import React from 'react'
import ComponenetsHeading from './ComponenetsHeading'

const Table = ({ title, data, columns }) => {
    return (
        <>
            <div className='bg-bl'>
                {/* <ComponenetsHeading title={title}/> */}
                <table>
                    <thead className="bg-blue-400">
                        <tr>
                            {columns.map((x, i) => (
                                <th key={i} className="p-2 w-[315px] border border-2 border-y-black border-x-black">{x.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((x, i) => (
                            <tr key={i} >
                                {columns.map((col, colInd) => (
                                    <td className="text-center bg-blue-200 py-1 border border-2 border-black w-auto" key={colInd}>
                                        {x[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table

