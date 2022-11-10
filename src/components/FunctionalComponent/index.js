import React from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);

  const increaseCount = () => {
    return setCount(count + 1);
  }

  const decreaseCount = () => {
    return setCount(count - 1)
  }

  return (
    <p>
      <FaPlusCircle onClick={increaseCount} />
      <span>{count}</span>
      <FaMinusCircle onClick={decreaseCount} />
    </p>
  );
}

export default FunctionalComponent;
