export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://195.35.36.122:1991/api/authentication" 
    : "/api/authentication";
