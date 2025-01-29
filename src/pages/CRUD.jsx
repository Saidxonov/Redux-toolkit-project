import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { UserForm } from "../components/UserForm";
import { SearchSort } from "../components/SearchSort";
import { fetchUsers, selectFilteredUsers } from "../store/userSlice";
import { Plus } from "lucide-react";

function CRUD() {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedUser(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(undefined);
  };

  return (
    <div className="px-4 py-8 ml-[310px]">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 ">
            Foydalanuvchilar Ro'yxati
          </h1>
          <button
            onClick={handleAdd}
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Yangi foydalanuvchi
          </button>
        </div>
        <SearchSort />
      </div>

      <UserList users={users} onEdit={handleEdit} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">
              {selectedUser
                ? "Foydalanuvchini tahrirlash"
                : "Yangi foydalanuvchi"}
            </h2>
            <UserForm user={selectedUser} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CRUD;
