import react from 'react'
import numeral from 'numeral'

const CurrencyFromatter = (amount) => {
    const formattedAmount = numeral(amount).format("$0, 0.00");
    
    return(
        <div>{formattedAmount}</div>
    )
}

export default CurrencyFromatter