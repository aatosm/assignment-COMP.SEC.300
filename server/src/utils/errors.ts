export class StatusError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}

export class BadRequestError extends StatusError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnauthorizedError extends StatusError {
  constructor(message = 'Permission denied.') {
    super(message, 401);
  }
}

export class ForbiddenError extends StatusError {
  constructor(message = 'Permission denied.') {
    super(message, 403);
  }
}

export class NotFoundError extends StatusError {
  constructor(message = 'Not found.') {
    super(message, 404);
  }
}

export class ReservationFailedError extends Error {
  constructor(message = 'Reservation failed.') {
    super(message);
  }
}
