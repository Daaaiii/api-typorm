import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: new Date('2000-01-01'),
  email: 'dai@gmail.com',
  name: 'Daiane Bolzan',
  password: '1234',
  role: Role.User,
};
