import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CryptoPaymentService } from "./cryptoPayment.service";
import { CryptoPaymentGrpcControllerBase } from "./base/cryptoPayment.grpc.controller.base";

@swagger.ApiTags("cryptoPayments")
@common.Controller("cryptoPayments")
export class CryptoPaymentGrpcController extends CryptoPaymentGrpcControllerBase {
  constructor(protected readonly service: CryptoPaymentService) {
    super(service);
  }
}
