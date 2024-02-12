import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Daia Bolzan',
    email: 'dai3@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$5deSdb6Cnxk6/P1mZrtyE.6zmjhI8YgFKbl7kc7RZ1B.OvwipQSSm',
    createdAt: new Date(),
    updatedAt: new Date(),
    role: Role.User,
  },
];
