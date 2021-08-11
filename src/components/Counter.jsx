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
    <div className="calculator">
      <div className="calculator__main">
        {count}
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <label htmlFor="calculator-step">Step</label>
        <input type="number" placeholder="step" onChange={handleStepChange} value = {step} id="calculator-step"/>
        <label htmlFor="calculator-max">Max</label>
        <input type="number" placeholder="max" onChange={handleMaxChange} value = {max} id="calculator-max"/>
        <label htmlFor="calculator-min">Min</label>
        <input type="number" placeholder="min" onChange={handleMinChange} value = {min} id="calculator-min"/>
      </div>
    </div>
  );
}
