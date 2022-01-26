import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import // addContactRequest,
// // addContactSuccess,
// // addContactError,
// // deleteContactRequest,
// // deleteContactSuccess,
// // deleteContactError,
// // fetchContactsRequest,
// // fetchContactsSuccess,
// // fetchContactsError,
// "./action";
axios.defaults.baseURL =
  "https://61e892337ced4a00172ff620.mockapi.io/contacts/contacts";

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
//   // // axios
//   // //   .get("/contacts")
//   //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //   .catch((error) => dispatch(fetchContactsError(error)));
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",

  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return error;
    }
  }
);

// export const addContact = (name) => (dispatch) => {
//   const contact = {
//     name: name.name,
//     phone: name.number,
//     completed: false,
//   };

//   dispatch(addContactRequest());

//   axios
//     .post("/contacts", contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };

export const addContact = createAsyncThunk(
  "contacts/addContacts",

  async (name) => {
    const contact = {
      name: name.name,
      phone: name.number,
    };
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return error;
    }
  }
);
// export const deleteContact = (id) => (dispatch) => {
//   dispatch(deleteContactRequest);
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
