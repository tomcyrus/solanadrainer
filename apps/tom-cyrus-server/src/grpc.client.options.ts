import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "product",
      "order",
      "category",
      "user",
      "paystackpayment",
      "cryptopayment",
      "preorder",
      "cartitem"
    ],
    protoPath: [
      "src/product/product.proto",
      "src/order/order.proto",
      "src/category/category.proto",
      "src/user/user.proto",
      "src/paystackpayment/paystackpayment.proto",
      "src/cryptopayment/cryptopayment.proto",
      "src/preorder/preorder.proto",
      "src/cartitem/cartitem.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
