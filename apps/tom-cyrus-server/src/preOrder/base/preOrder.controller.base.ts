/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PreOrderService } from "../preOrder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PreOrderCreateInput } from "./PreOrderCreateInput";
import { PreOrder } from "./PreOrder";
import { PreOrderFindManyArgs } from "./PreOrderFindManyArgs";
import { PreOrderWhereUniqueInput } from "./PreOrderWhereUniqueInput";
import { PreOrderUpdateInput } from "./PreOrderUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PreOrderControllerBase {
  constructor(
    protected readonly service: PreOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PreOrder })
  @nestAccessControl.UseRoles({
    resource: "PreOrder",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PreOrderCreateInput,
  })
  async createPreOrder(
    @common.Body() data: PreOrderCreateInput
  ): Promise<PreOrder> {
    return await this.service.createPreOrder({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        location: true,
        designFile: true,
        description: true,
        preOrderDate: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PreOrder] })
  @ApiNestedQuery(PreOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PreOrder",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async preOrders(@common.Req() request: Request): Promise<PreOrder[]> {
    const args = plainToClass(PreOrderFindManyArgs, request.query);
    return this.service.preOrders({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        location: true,
        designFile: true,
        description: true,
        preOrderDate: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PreOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PreOrder",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async preOrder(
    @common.Param() params: PreOrderWhereUniqueInput
  ): Promise<PreOrder | null> {
    const result = await this.service.preOrder({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        location: true,
        designFile: true,
        description: true,
        preOrderDate: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PreOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PreOrder",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PreOrderUpdateInput,
  })
  async updatePreOrder(
    @common.Param() params: PreOrderWhereUniqueInput,
    @common.Body() data: PreOrderUpdateInput
  ): Promise<PreOrder | null> {
    try {
      return await this.service.updatePreOrder({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          location: true,
          designFile: true,
          description: true,
          preOrderDate: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PreOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PreOrder",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePreOrder(
    @common.Param() params: PreOrderWhereUniqueInput
  ): Promise<PreOrder | null> {
    try {
      return await this.service.deletePreOrder({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          location: true,
          designFile: true,
          description: true,
          preOrderDate: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
