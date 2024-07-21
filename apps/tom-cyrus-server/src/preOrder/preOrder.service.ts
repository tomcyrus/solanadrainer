import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreOrderServiceBase } from "./base/preOrder.service.base";

@Injectable()
export class PreOrderService extends PreOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
