import { z } from 'zod';

const updatedProfileSchema = z
  .object({
    name: z.string({ required_error: 'Informe o nome' }),
    email: z.string({ required_error: 'Informe o e-mail' }).email({
      message: 'E-mail inválido',
    }),
    password: z
      .string({ required_error: 'Informe a senha' })
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
    confirm_password: z.string({ required_error: 'Confirme a senha' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não coincidem',
    path: ['confirm_password'],
  });

type updateProfileSchemaType = z.infer<typeof updatedProfileSchema>;

export { updateProfileSchemaType, updatedProfileSchema };
