export const logger = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  return result;
};

export const timeoutScheduler = (store: any) => (next: any) => (action: any) => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }

  const timeoutId = setTimeout(() => next(action), action.meta.delay);

  return function cancel() {
    clearTimeout(timeoutId);
  };
};
