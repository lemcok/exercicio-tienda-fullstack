import { Dispatch, SetStateAction } from 'react';

interface props {
   setSearchInput: Dispatch<SetStateAction<string>>;
   searchInput: string;
}
export const SearchInput = ({ setSearchInput, searchInput }: props) => {
   return (
      <div className="container mx-auto block max-w-md">
         <input
            className="px-3 py-2 border border-red-600 focus:outline-none rounded-md mb-3 w-full text-gray-800"
            type="text"
            placeholder="search ...."
            autoComplete="off"
            name="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
         />
      </div>
   );
};
