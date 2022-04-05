import React from "react";
import Counter from "./counter";
import PersonComp from "./person";
// This is error boundary import for npm sntalled package
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback";
// this is error boundary for custom error boundary
// import ErrorBoundary from "./ErrorBoundary";

function ParentError() {
  const Person = {
    firstName: "Shiva",
    lastName: "Reddy",
  };
  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo);
  };
  return (
    // This is error boundary import for npm intalled package

    <div>
      <ErrorBoundary FallbackComponent={Fallback} onerror={errorHandler}>
        <PersonComp person={Person} />
        <Counter title="this is a counter screen"></Counter>
      </ErrorBoundary>
    </div>
    // this is error boundary for custom error boundary

    //      <ErrorBoundary >
    //      <PersonComp person={Person} />
    //      <Counter></Counter>
    //    </ErrorBoundary>
  );
}

export default ParentError;
