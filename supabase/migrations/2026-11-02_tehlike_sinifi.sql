-- Mevcut Supabase projende SQL Editor'e yapıştırıp çalıştır.
-- companies tablosuna opsiyonel "tehlike_sinifi" sütunu ekler.

alter table public.companies
  add column if not exists tehlike_sinifi text
  check (tehlike_sinifi in ('cok_tehlikeli', 'tehlikeli', 'az_tehlikeli'));
