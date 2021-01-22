import { Request, Response } from "express";
import { Controller } from "../decorators/controller";
import { Get } from "../decorators/routes";

@Controller("/")
export class RooteRouter {
  @Get("")
  getRoute(req: Request, res: Response) {
    return "hello world....";
  }
}
