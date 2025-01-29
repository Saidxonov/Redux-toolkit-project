import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setSortBy } from "../store/userSlice";
import { Search } from "lucide-react";

export const SearchSort = () => {
  const dispatch = useDispatch();
  const { searchTerm, sortBy } = useSelector((state) => state.users);

  return (
    <div className="flex space-x-4 mb-4 ml-[310px]">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Qidirish..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="block  pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <select
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
        className="block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        <option value="name">Ism bo'yicha</option>
        <option value="age">Yosh bo'yicha</option>
      </select>
    </div>
  );
};
