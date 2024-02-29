import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

// jest.mock('axios');

describe("App component", () => {
  beforeEach(() => {
    store.dispatch({ type: "RESET_STATE" });
  });

  it("App component render check", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const titleElement = screen.getByText(/Redux Saga Demo/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("Check Buttons", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it("Check Decrement Value and if val goes below 0", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Redux Count : 1/i)).toBeInTheDocument();
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Redux Count : 0/i)).toBeInTheDocument();
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Redux Count : 0/i)).toBeInTheDocument();
  });

  it("Check Increment Value", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Redux Count : 1/i)).toBeInTheDocument();
  });

  it("Check JSON Typicode call", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const element = await screen.findByText(/Clementine Bauch/i);
    expect(element).toBeInTheDocument();
  });
});
