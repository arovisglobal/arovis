/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `company_email` (text)
      - `phone_no` (text)
      - `website_uri` (text)
      - `company_type` (text)
      - `company_role` (text)
      - `department` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anyone to insert contact messages (public form)
    - Add policy for authenticated users to view all contacts (admin access)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  company_email text NOT NULL,
  phone_no text NOT NULL,
  website_uri text NOT NULL,
  company_type text NOT NULL,
  company_role text NOT NULL,
  department text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
