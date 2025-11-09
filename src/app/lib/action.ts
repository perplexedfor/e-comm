// src/app/lib/action.ts

"use server"

import { z } from 'zod';
import prisma from '@/db';
import { reviews } from '@prisma/client';
import nodemailer from 'nodemailer';

// === 1. YOUR MISSING getproductDetails FUNCTION ===
export async function getproductDetails(name: string) {
  switch (name) {
    case "AC_BOX":
      try {
        const products = await prisma.aC_BOX.findMany();
        return products;
      } catch (e) {
        console.log(e);
      }
      break; // Added break
    case "GI_MODULAR_BOX":
      try {
        const products = await prisma.gI_MODULAR_BOX.findMany();
        return products;
      } catch (e) {
        console.log(e);
      }
      break; // Added break
    case "MAIN_SWITCH_CHANGEOVER":
      try {
        const products = await prisma.mAIN_SWITCH_CHANGEOVER.findMany();
        return products;
      } catch (e) {
        console.log(e);
      }
      break; // Added break
    case "BUS_BAR":
      try {
        const products = await prisma.bUS_BAR.findMany();
        return products;
      } catch (e) {
        console.log(e);
      }
      break; // Added break
    case "MCB_DB_BOX":
      try {
        const products = await prisma.mCB_DB_BOX.findMany();
        return products;
      } catch (e) {
        console.log(e);
      }
      break; // Added break
    case "MCB":
      try {
        const products = await prisma.mCB.findMany();
        return products;
      } catch (e) {
        console.log(e);
      }
      break; // Added break
  }
}

// === 2. YOUR createReview FUNCTION ===
const ReviewSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  rating: z.number(),
  message: z.string().min(15, { message: 'message must be at least 15 characters' }),
  category: z.number(),
});

export async function createReview(value:{ name: string, message: string,rating : string,id: string} ) {
    console.log(value);
    const val = ReviewSchema.safeParse({
        name: value['name'],
        rating: Number(value['rating']),
        message: value['message'],
        category: Number(value['id'])
    });
    if (!val.success) {
        return val.error.issues[0].message.toString();
    }
    
    const { name, rating, message, category } = val.data;
    let review:reviews;
    if(category === 0){
    review = await prisma.reviews.create({
        data: {
            name,
            rating,
            review : message,
        }
    });
  } else {
    review = await prisma.reviews.create({
        data: {
            name,
            rating,
            review : message,
            categoryId: category
        }
    });
  }
}

// === 3. YOUR submitQuoteRequest FUNCTION ===
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function submitQuoteRequest(formData: FormData) {
  'use server'; 
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const company = formData.get('company') as string;
  const message = formData.get('message') as string;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'eletrax2024@gmail.com',
    replyTo: email,
    subject: `New Quote Request from ${name} - ${company || 'Eletrax Website'}`,
    html: `
      <h2>New Quote Request Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <hr>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('--- NEW QUOTE REQUEST ---');
    console.log('Status: Email Sent Successfully');
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email.' };
  }
} 