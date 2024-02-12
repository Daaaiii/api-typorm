import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: new Date('2000-01-01'),
  email: 'dai@gmail.com',
  name: 'Daiane Bolzan',
  password: '1234',
  role: Role.User,
};
