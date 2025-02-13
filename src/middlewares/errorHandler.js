import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
  }
  if (err.isJoi) {
    return res.status(400).json({
      status: 400,
      message: err.message,
      name: 'Validation error',
    });
  }
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};