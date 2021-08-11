import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, changeStep, changeMax, changeMin } from "../libs/store/features/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);
  const max = useSelector((state) => state.counter.max);
  const min = useSelector((state) => state.counter.min);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  }

  const handleStepChange = (e) => {
    if(e.target.value !== "") {
      dispatch(changeStep(Number(e.target.value)));    
    }else{
      dispatch(changeStep(''));
    }
    
  }
  
  const handleMaxChange = (e) => {
    if(e.target.value !== "") {
      dispatch(changeMax(Number(e.target.value)));    
    }else{
      dispatch(changeMax(""));
    }
  }

  const handleMinChange = (e) => {
    if(e.target.value !== "") {
      dispatch(changeMin(Number(e.target.value)));    
    }else{
      dispatch(changeMin(""));
    } 
  }
  return (
    <div className="calculator mt-5">
      <div className="calculator__main">
        <h2 className="text-4xl">
          {count}
        </h2>
        <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={handleInc}>+</button>
        <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={handleDec}>-</button>

        <label htmlFor="calculator-step" className="text-sm border border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">Step</label>
        <input type="number" placeholder="step" className="border border-2 rounded-r px-4 py-2 w-full" onChange={handleStepChange} value = {step} id="calculator-step"/>

        <label htmlFor="calculator-max" className="text-sm border border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">Max</label>
        <input type="number" placeholder="max" className="border border-2 rounded-r px-4 py-2 w-full" onChange={handleMaxChange} value = {max} id="calculator-max"/>
        
        <label htmlFor="calculator-min" className="text-sm border border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">Min</label>
        <input type="number" placeholder="min" className="border border-2 rounded-r px-4 py-2 w-full" onChange={handleMinChange} value = {min} id="calculator-min"/>
      </div>
    </div>
  );
}
