import { useState } from 'react';

const SearchBar: React.FC = () => {
  const [ text, setText ] = useState<string>('');

  return (
    <label className="relative bg-neutral-200 px-3 py-4 flex items-center flex-grow gap-4 cursor-text transition-shadow duration-500 focus-within:[box-shadow:_0_3px_0_black]">
      <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="m20.8333 19-3.6666-3.6667c.9167-1.3333 1.4999-2.9166 1.4999-4.6666 0-4.33334-3.5833-7.9167-7.9167-7.9167-4.33331 0-7.91665 3.58336-7.91665 7.9167 0 4.3333 3.58334 7.9167 7.91665 7.9167 1.75 0 3.3334-.5834 4.6668-1.5001l3.6666 3.6667zm-15.50005-8.25c0-2.99999 2.41667-5.41666 5.41665-5.41666 3 0 5.4167 2.41667 5.4167 5.41666 0 3-2.4167 5.4167-5.4167 5.4167-2.99998 0-5.41665-2.4167-5.41665-5.4167z" fill="#000000"></path></svg>
      <input type="text" placeholder="Food, groceries, drinks, etc" className="bg-transparent focus:outline-none flex-grow" onChange={(e) => setText(e.currentTarget.value)} value={text}/>
      {text && <button onClick={() => setText('')} className="text-neutral-500 text-base">Clear</button>}
    </label>
  );
};

export default SearchBar;