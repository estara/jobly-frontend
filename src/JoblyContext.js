import React from "react";

const CurrentUserContext = React.createContext(undefined);
const CurrentUserDispatchContext = React.createContext(undefined);
const HasAppliedToJobContext = React.createContext(undefined);
const HasAppliedToJobDispatchContext = React.createContext(undefined)
const CompaniesContext = React.createContext(undefined);
const CompaniesDispatchContext = React.createContext(undefined);
const JobsContext = React.createContext(undefined);
const JobsDispatchContext = React.createContext(undefined);

export { CurrentUserContext, CurrentUserDispatchContext, HasAppliedToJobContext, HasAppliedToJobDispatchContext, CompaniesContext, CompaniesDispatchContext, JobsContext, JobsDispatchContext };