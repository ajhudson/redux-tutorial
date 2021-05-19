export const COUNTER_INCREMENT = "counter_increment";
export const COUNTER_DECREMENT = "counter_decrement";
export const COUNTER_RESET = "counter_reset";

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case COUNTER_RESET: {
      return {
        ...state,
        count: 0,
      };
    }

    default:
      return { ...state };
  }
};

export default counterReducer;
