import type { Meta, StoryObj } from '@storybook/react'
import * as Form from '@/components/Form/Form'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/Input/Input'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const meta: Meta<typeof Form.Root> = {
  component: Form.Root,
  argTypes: {},
  args: {},
}

export default meta

const Example = (args: ComponentProps<typeof Form.Root>) => {
  const schema = z.object({
    email: z
      .string()
      .min(1, 'Please enter a value.')
      .email('Please enter a valid email.'),
  })

  const form = useForm<z.infer<typeof schema>>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  return (
    <Form.Root {...form} {...args}>
      <Form.Field
        control={form.control}
        name='email'
        render={({ field, fieldState }) => {
          return (
            <Form.Item>
              <Form.Label>Email</Form.Label>
              <Form.Control>
                <Input
                  {...field}
                  size='s'
                  inputMode='email'
                  placeholder='abc@gmail.com'
                  autoFocus
                  isError={!!fieldState.error}
                />
              </Form.Control>
              <Form.Description>
                We never share your email with anyone else.
              </Form.Description>
              <Form.Message />
            </Form.Item>
          )
        }}
      />
    </Form.Root>
  )
}

export const Default: StoryObj<typeof Form.Root> = {
  render: (args) => <Example {...args} />,
}
