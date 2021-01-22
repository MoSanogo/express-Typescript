import { Methods } from "./methods";
import { routeBinder } from "./routeBinder";

export const Get = routeBinder(Methods.get);
export const Delete = routeBinder(Methods.del);
export const Patch = routeBinder(Methods.patch);
export const Put = routeBinder(Methods.put);
