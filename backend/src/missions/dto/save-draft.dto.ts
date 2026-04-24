
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { Prisma } from '@prisma/client';

import { IsNotEmpty, IsObject, IsString } from 'class-validator';


export class SaveDraftDto {
  @IsString()
  @IsNotEmpty()
  title: string = '';


  @ValidateIf((_, value) => value !== null)
  data: Prisma.InputJsonValue | null = {};

  @IsObject()
  data: Record<string, unknown> = {};

}
