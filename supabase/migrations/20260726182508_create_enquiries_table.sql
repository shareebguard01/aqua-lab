/*
# Create enquiries table (single-tenant, no auth)

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the person enquiring
  - `email` (text, nullable) — optional contact email
  - `phone` (text, nullable) — optional contact phone
  - `enquiry_type` (text, not null) — one of: home, bulk, event, other
  - `message` (text, not null) — the enquiry body
  - `status` (text, not null, default 'new') — workflow status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated to INSERT (public contact form, no sign-in).
- No SELECT/UPDATE/DELETE for anon or authenticated — enquiries are read
  only by the project owners via the Supabase dashboard, not the frontend.
3. Notes
- This is a public marketing/contact form. There is no sign-in screen,
  so the anon-key frontend must be able to insert. Reads are intentionally
  blocked at the API layer; owners view submissions in the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  phone text,
  enquiry_type text NOT NULL CHECK (enquiry_type IN ('home', 'bulk', 'event', 'other')),
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
