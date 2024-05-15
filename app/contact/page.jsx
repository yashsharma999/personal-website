'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

const schema = yup
  .object({
    name: yup.string().max(30, 'Max 30 characters').required(),
    email: yup.string().email().required(),
    message: yup
      .string()
      .min(20, 'Mininum 20 letters')
      .max(100, 'Exceeded 100 letters. Please keep it short')
      .required(),
  })
  .required();

export default function ContactPage() {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const submit = (values) => {
    console.log('values', values);
  };

  return (
    <div className='bg-white p-8 rounded-lg max-w-lg mx-auto '>
      <Form {...form}>
        <form
          //onSubmit={form.handleSubmit(submit)}
          onSubmit={form.handleSubmit(submit)}
          className='space-y-8 mx-auto'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='bg-[#f9f9f9] rounded-lg outline-none border-none h-12'
                    placeholder={"What's your name ?"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='bg-[#f9f9f9] rounded-lg outline-none border-none h-12'
                    placeholder={`What's your email address ?`}
                    type='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className='bg-[#f9f9f9] rounded-lg outline-none border-none'
                    {...field}
                    placeholder='Type your message here.'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full' disabled={false} type='submit'>
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
}
