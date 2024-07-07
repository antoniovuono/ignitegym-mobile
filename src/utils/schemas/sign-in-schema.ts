import { z } from 'zod';

const signInSchema = z.object({
  email: z
    .string({
      required_error: 'E-mail obrigatório',
    })
    .email({
      message: 'E-mail inválido',
    }),
  password: z
    .string({
      required_error: 'Senha obrigatória',
    })
    .min(6),
});

type signInSchemaTypes = z.infer<typeof signInSchema>;

export { signInSchema, signInSchemaTypes };
