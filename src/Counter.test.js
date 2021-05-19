import React from "react";
import {
  cleanup,
  findByText,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import StateProvider from "./StateProvider";
import Counter from "./Counter";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./reducers/counterReducer";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Tests for the Counter component", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  const renderWithState = (initCount) => {
    const initialState = { counter: { count: initCount } };
    return render(
      <StateProvider initialState={initialState}>
        <Counter />
      </StateProvider>
    );
  };

  it("should render the component with an initialised value", async () => {
    const { container } = renderWithState(1);
    expect(await findByText(container, "Value: 1")).toBeVisible();
  });

  it("should increment the counter", async () => {
    const { container } = renderWithState(1);
    fireEvent.click(container.querySelector("#increment-btn"));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: COUNTER_INCREMENT })
      );
    });
  });

  it("should decrement the counter", async () => {
    const { container } = renderWithState(10);
    fireEvent.click(container.querySelector("#decrement-btn"));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: COUNTER_DECREMENT })
      );
    });
  });

  it("should reset the counter", async () => {
    const { container } = renderWithState(10);
    fireEvent.click(container.querySelector("#reset-btn"));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: COUNTER_RESET })
      );
    });
  });
});
