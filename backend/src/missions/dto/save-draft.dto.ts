import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class SaveDraftDto {
  @IsString()
  @IsNotEmpty()
  title: string = '';

  @IsObject()
  data: Record<string, unknown> = {};
}
