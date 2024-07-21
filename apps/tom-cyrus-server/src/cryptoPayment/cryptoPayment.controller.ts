import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CryptoPaymentService } from "./cryptoPayment.service";
import { CryptoPaymentControllerBase } from "./base/cryptoPayment.controller.base";

@swagger.ApiTags("cryptoPayments")
@common.Controller("cryptoPayments")
export class CryptoPaymentController extends CryptoPaymentControllerBase {
  constructor(
    protected readonly service: CryptoPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
