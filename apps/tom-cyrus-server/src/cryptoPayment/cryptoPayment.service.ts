import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptoPaymentServiceBase } from "./base/cryptoPayment.service.base";

@Injectable()
export class CryptoPaymentService extends CryptoPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
