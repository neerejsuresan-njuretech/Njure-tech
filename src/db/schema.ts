import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const inquiries = pgTable('inquiries', {
  id: serial('id').primaryKey(),
  trackingId: text('tracking_id').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company').notNull(),
  service: text('service').notNull(),
  budget: text('budget').notNull(),
  timeline: text('timeline').notNull(),
  message: text('message').notNull(),
  status: text('status').default('pending_review').notNull(),
});

export const applications = pgTable('applications', {
  id: serial('id').primaryKey(),
  applicationId: text('application_id').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  location: text('location').notNull(),
  role: text('role').notNull(),
  experience: text('experience').notNull(),
  portfolio: text('portfolio'),
  resumeFileName: text('resume_file_name').notNull(),
  status: text('status').default('under_review').notNull(),
});
