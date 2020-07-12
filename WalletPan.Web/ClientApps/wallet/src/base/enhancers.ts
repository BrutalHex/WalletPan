const titterTooterReducerEnhancer = (createStore: any) => (
  reducer: any,
  initialState: any,
  enhancer: any
) => {
  const calculateTimeCost = (state: any, action: any) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = Math.round(end - start);
    console.log('reducer process time:', diff);
    return newState;
  };
  return createStore(calculateTimeCost, initialState, enhancer);
};
export default titterTooterReducerEnhancer;
