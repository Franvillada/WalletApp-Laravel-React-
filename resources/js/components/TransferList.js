import React from 'react'

const TransferList = ({transfers}) => (
    <table className="table">
        <tbody>
            {transfers.map((transfer) =>(
                <tr key={transfer.id}>
                    <td className="registro">{transfer.description}</td>
                    <td
                        className={transfer.amount > 0 ? 'text-success registro' : 'text-danger registro'}
                    >
                        {transfer.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default TransferList