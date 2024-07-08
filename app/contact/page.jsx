'use client';

import React, { useState } from 'react';
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
import Faq from '@/components/Faq';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: 'https://decent-tetra-30112.upstash.io',
  token: 'AXWgAAIncDE1N2ZlYmQxM2E0MGQ0NTUyYjJjMDNkMzc0Y2QyNTcyMXAxMzAxMTI',
});

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
  const [payload, setPayload] = useState(null);
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const submit = async (values) => {
    try {
      setPayload(values);
      toast('Your message has been sent 🚀');
      const data = await redis.set(`${values.email}`, JSON.stringify(values));
    } catch (error) {
      toast('Some error occured');
    }
  };

  return (
    <section className='max-w-lg mx-auto'>
      <div className=' flex flex-col gap-4  mb-8'>
        <ChatBlock text={`Nice to meet you! 👋`} />
        <ChatBlock text={`Fill the form below to get in touch! 👇`} />
      </div>
      {payload ? (
        <div className='flex gap-4 items-end flex-col'>
          <ChatBlock text={`Hi, I am ${payload.name}`} />
          <ChatBlock className={'max-w-[75%]'} text={payload.message} />
        </div>
      ) : (
        <div className='bg-white shadow-sm p-8 rounded-lg   '>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className='space-y-8 '>
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
      )}

      <div className=' flex flex-col gap-4 mx-auto mt-8'>
        <ChatBlock text={`Have more questions? 🤔`} />
        <ChatBlock text={`Check out the frequently asked questions below`} />
      </div>
      <Faq />
    </section>
  );
}

const ChatBlock = ({ text, className }) => {
  return (
    <div
      className={cn(
        'bg-[#eee] w-fit py-2 px-4 rounded-full text-sm font-semibold',
        className
      )}
    >
      {text}
    </div>
  );
};
