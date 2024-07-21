import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaystackPaymentServiceBase } from "./base/paystackPayment.service.base";

@Injectable()
export class PaystackPaymentService extends PaystackPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
