export default function Input ({
    className="",
    label,
    currencyTypes={},
    amount,
    onAmountChange,
    selectCurrency,
    onCurrencyChange,
    isDisabled=false
}) {
     return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className={`p-2 border-2 rounded-2xl w-full bg-transparent ${className}`}
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={isDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        Object.keys(currencyTypes).map(currency => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}