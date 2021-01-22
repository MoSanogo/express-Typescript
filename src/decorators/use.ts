import { RequestHandler } from "express";
import "reflect-metadata";
import { MetadataKeys } from "./metadataKeys";

export function use(...args: RequestHandler[]) {
  return (target: Function, key: string, desc: PropertyDescriptor) => {
    const existingMiddlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...existingMiddlewares, ...args],
      target,
      key
    );
  };
}
