import React from 'react';

const GeneralContext = React.createContext();

export const GeneralProvider = GeneralContext.Provider;
export const GeneralConsumer = GeneralContext.Consumer;

export default GeneralContext;
