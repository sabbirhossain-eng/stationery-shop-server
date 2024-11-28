import { Response } from "express";
import mongoose from "mongoose";
import config from "../config";

export const handleError = (error: unknown, res: Response): void => {
  const errorResponse: {
    message: string;
    success: boolean;
    error?: {
      name: string;
      errors?: Record<string, unknown>;
    };
    stack?: string;
  } = {
    message: "Something went wrong",
    success: false,
  };

  // Mongoose Validation Error
  if (error instanceof mongoose.Error.ValidationError) {
    const formattedErrors: Record<string, unknown> = {};

    Object.keys(error.errors).forEach((key) => {
      const fieldError = error.errors[key] as mongoose.Error.ValidatorError;

      formattedErrors[key] = {
        message: fieldError.message,
        name: fieldError.name,
        properties: fieldError.properties,
        kind: fieldError.kind,
        path: fieldError.path,
        value: fieldError.value,
      };
    });

    errorResponse.message = "Validation failed";
    errorResponse.error = {
      name: error.name,
      errors: formattedErrors,
    };
  } else if (error instanceof Error) {
    errorResponse.message = error.message;
  }

  
  if (config.node_env && error instanceof Error) {
    errorResponse.stack = error.stack;
  }


  res.status(error instanceof mongoose.Error.ValidationError ? 400 : 500).json(errorResponse);
};
