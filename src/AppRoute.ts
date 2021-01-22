import express, { Router } from "express";

export class AppRouter {
  static instance: Router;

  static getInstance() {
    if (!this.instance) {
      return (this.instance = express.Router());
    }
    return this.instance;
  }
}
