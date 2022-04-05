import React from "react";
import Counter from "./counter";
import PersonComp from "./person";
import ErrorBoundary from "./ErrorBoundary";

function ParentError() {
  const Person = {
    firstName: "Shiva",
    lastName: "Reddy",
  };

  return (
    <div>
      <ErrorBoundary>
        <PersonComp person={Person} />
        <PersonComp />

        <Counter></Counter>
      </ErrorBoundary>
    </div>
  );
}

export default ParentError;
