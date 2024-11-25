export class ApiUnauthorizedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = ErrorName.ApiUnauthorizedError;
  }
}

export enum ErrorName {
  ApiUnauthorizedError = "ApiUnauthorizedError",
}
