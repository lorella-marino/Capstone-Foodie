import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPaymentIntent = createAsyncThunk("payment/createIntent", async (amount) => {
  const res = await fetch("http://localhost:8080/api/payment/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) {
    throw new Error("Errore nella creazione del PaymentIntent");
  }

  const data = await res.json();
  return data.clientSecret;
});

const paymentSlice = createSlice({
  name: "payment",
  initialState: { clientSecret: null },
  extraReducers: (builder) => {
    builder.addCase(createPaymentIntent.fulfilled, (state, action) => {
      state.clientSecret = action.payload;
    });
  },
});

export default paymentSlice.reducer;
