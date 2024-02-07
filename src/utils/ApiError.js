class ApiError extends Error {
  constructor(
    statuscode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    this.errors = errors;
    this.data = data;
    this.message = message;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
