import { z } from 'zod';

const SignUpSchema = z
  .object({
    name: z.string({
      required_error: 'Informe o nome do usuário',
      invalid_type_error: 'Nome inválido',
    }),
    email: z
      .string({
        required_error: 'Informe o e-mail',
      })
      .email({
        message: 'E-mail inválido',
      }),
    password: z
      .string({
        required_error: 'Informe a senha',
      })
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
    confirmPassword: z.string({ required_error: 'Confirme a senha' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type SignUpSchemaTypes = z.infer<typeof SignUpSchema>;

export { SignUpSchema, SignUpSchemaTypes };
