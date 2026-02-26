
import React from "react";

import { GustoEmbeddedCore } from "../core.js";

const GustoEmbeddedContext = React.createContext<GustoEmbeddedCore | null>(null);

export function GustoEmbeddedProvider(props: { client: GustoEmbeddedCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <GustoEmbeddedContext.Provider value={props.client}>
      {props.children}
    </GustoEmbeddedContext.Provider>
  );
}

export function useGustoEmbeddedContext(): GustoEmbeddedCore { 
  const value = React.useContext(GustoEmbeddedContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of GustoEmbeddedCore and pass it to <GustoEmbeddedProvider />.");
  }
  return value;
}
