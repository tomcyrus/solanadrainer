import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreOrderService } from "./preOrder.service";
import { PreOrderGrpcControllerBase } from "./base/preOrder.grpc.controller.base";

@swagger.ApiTags("preOrders")
@common.Controller("preOrders")
export class PreOrderGrpcController extends PreOrderGrpcControllerBase {
  constructor(protected readonly service: PreOrderService) {
    super(service);
  }
}
