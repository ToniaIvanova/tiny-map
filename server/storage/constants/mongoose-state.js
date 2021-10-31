export const MONGOOSE_READY_STATE = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
};
  
export const MONGOOSE_STATE = {
  disconnected: MONGOOSE_READY_STATE[0],
  connected: MONGOOSE_READY_STATE[1],
  connecting: MONGOOSE_READY_STATE[2],
  disconnecting: MONGOOSE_READY_STATE[3],
  error: 'error',
};
