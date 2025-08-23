import { useState } from "react";
import Input from "./componants/Input";
import useCurrencyInfo from "./Hook/uesCurrencyInfo";

export default function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('BDT');
    const [convertedAmount, setConvertedAmount] = useState(0);
    
    const {data: currencyTypes, error} = useCurrencyInfo(from);
    
    const convert = () => setConvertedAmount((amount * currencyTypes[to]).toFixed(2));

    const swapValue = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen text-xl text-red-500">
                Error: {error}
            </div>
        );
    }

   return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/50">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                }} >
                    <div className="w-full mb-1">
                        <Input 
                            className="border-black outline-black"
                            label="For" 
                            currencyTypes={currencyTypes} 
                            amount={amount} 
                            selectCurrency={from}
                            onAmountChange={amount => setAmount(amount)}
                            onCurrencyChange={currency => setFrom(currency)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swapValue}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flip-vertical2-icon lucide-flip-vertical-2">
                                <path d="m17 3-5 5-5-5h10"/>
                                <path d="m17 21-5-5-5 5h10"/>
                                <path d="M4 12H2"/>
                                <path d="M10 12H8"/>
                                <path d="M16 12h-2"/>
                                <path d="M22 12h-2"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input 
                            className="text-gray-500 cursor-not-allowed border-gray-500 outline-gray-500"
                            label="To" 
                            currencyTypes={currencyTypes}
                            selectCurrency={to}
                            amount={convertedAmount}
                            onCurrencyChange={currency => setTo(currency)}
                            isDisabled={true}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Converte
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
