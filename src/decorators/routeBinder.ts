import "reflect-metadata";
import { MetadataKeys } from "./metadataKeys";
import { Methods } from "./methods";

export function routeBinder(method: Methods) {
  return (path: string) => {
    return (target: any, key: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata(MetadataKeys.method, target, key);
      Reflect.defineMetadata(MetadataKeys.path, target, key);
    };
  };
}
