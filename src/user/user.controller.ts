import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Patch,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user-service';
import LogInterceptor from '../interceptors/log.interceptor';
import { ParamId } from '../decorators/param-id.decorator';
import { Role } from '../enums/role.enum';
import { Roles } from '../decorators/roles.decorator';
import { RoleGuard } from '../guards/role.guard';
import { AuthGuard } from '../guards/auth.guard';
import { ThrottlerGuard } from '@nestjs/throttler';

@Roles(Role.Admin)
@UseGuards(ThrottlerGuard, AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.userService.show(id);
  }

  @Put(':id')
  async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
    return this.userService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return {
      success: await this.userService.delete(id),
    };
  }
}
