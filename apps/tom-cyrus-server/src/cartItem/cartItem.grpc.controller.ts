import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CartItemService } from "./cartItem.service";
import { CartItemGrpcControllerBase } from "./base/cartItem.grpc.controller.base";

@swagger.ApiTags("cartItems")
@common.Controller("cartItems")
export class CartItemGrpcController extends CartItemGrpcControllerBase {
  constructor(protected readonly service: CartItemService) {
    super(service);
  }
}
