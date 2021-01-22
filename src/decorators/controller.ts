import { NextFunction } from "express";
import "reflect-metadata";
import { AppRoute } from "../AppRoute";
import { MetadataKeys } from "./metadataKeys";
import { Methods } from "./methods";

export function Controller(routerPrefix: string) {
  return (target: Function) => {
    const router = AppRoute.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path: string = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const middlewares: NextFunction[] =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      if (path) {
        router[method](`${routerPrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
