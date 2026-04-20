create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  organization text,
  subject text,
  message text not null,
  source text default 'contact_form',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 120
    and char_length(email) between 3 and 255
    and char_length(message) between 1 and 4000
  );

create index leads_created_at_idx on public.leads (created_at desc);