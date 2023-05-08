import { useState } from 'react';

function PrioritySelect({ priority }) {
  const [select, setSelect] = useState();

  const selected = (event) => {
    setSelect(+event.currentTarget.value);
    priority(+event.currentTarget.value);
  };

  return (
    <ul className='priority'>
      <li>
        <input
          type='radio'
          name='priority'
          id='num1'
          value={1}
          onChange={selected}
          checked={select === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num2'
          value={2}
          onChange={selected}
          checked={select === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num3'
          value={3}
          onChange={selected}
          checked={select === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num4'
          value={4}
          onChange={selected}
          checked={select === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num5'
          value={5}
          onChange={selected}
          checked={select === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num6'
          value={6}
          onChange={selected}
          checked={select === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num7'
          value={7}
          onChange={selected}
          checked={select === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num8'
          value={8}
          onChange={selected}
          checked={select === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority'
          id='num9'
          value={9}
          onChange={selected}
          checked={select === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          name='priority0'
          id='num10'
          value={10}
          onChange={selected}
          checked={select === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
}

export default PrioritySelect;
