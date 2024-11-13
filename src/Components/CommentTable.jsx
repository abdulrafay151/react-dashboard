import React from 'react'
import ComponenetsHeading from './ComponenetsHeading'

const Table = ({title, data, columns }) => {
    return (
        <>
        {/* <ComponenetsHeading /> */}
            <table className="">
                <thead className="bg-blue-400">
                    <tr>
                        {columns.map((x, i) => (
                            <th key={i} className="w-[316px] p-2 border border-2 border-y-black border-x-black">{x.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {data.map((x, i) => (
                        <tr key={i} >
                            {columns.map((comment, commentindex) => (
                                <td className="px-6 bg-blue-200 text-center py-2 border border-2 border-black !min-w-[100px]" style={{ width: `${[comment.key].lenght * 10}px` }} key={commentindex}>
                                    {x[comment.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table