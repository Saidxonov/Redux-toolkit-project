import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.firstName.localeCompare(b.firstName),
});

const initialState = usersAdapter.getInitialState({
  status: "idle",
  error: null,
  searchTerm: "",
  sortBy: "name",
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  await delay(500);
  return [];
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  await delay(500);
  return {
    ...user,
    id: Math.random().toString(36).substr(2, 9),
  };
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  await delay(500);
  return user;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await delay(500);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        usersAdapter.setAll(state, action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(addUser.fulfilled, usersAdapter.addOne)
      .addCase(updateUser.fulfilled, usersAdapter.upsertOne)
      .addCase(deleteUser.fulfilled, usersAdapter.removeOne);
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => state.users);

export const selectFilteredUsers = (state) => {
  const users = selectAllUsers(state);
  const searchTerm = state.users.searchTerm.toLowerCase();
  const sortBy = state.users.sortBy;

  let filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm) ||
      user.lastName.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
  );

  if (sortBy === "age") {
    filteredUsers = [...filteredUsers].sort((a, b) => a.age - b.age);
  } else {
    filteredUsers = [...filteredUsers].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
  }

  return filteredUsers;
};

export const { setSearchTerm, setSortBy } = userSlice.actions;

export default userSlice.reducer;
