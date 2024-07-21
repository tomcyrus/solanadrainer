import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaystackPaymentService } from "./paystackPayment.service";
import { PaystackPaymentGrpcControllerBase } from "./base/paystackPayment.grpc.controller.base";

@swagger.ApiTags("paystackPayments")
@common.Controller("paystackPayments")
export class PaystackPaymentGrpcController extends PaystackPaymentGrpcControllerBase {
  constructor(protected readonly service: PaystackPaymentService) {
    super(service);
  }
}
