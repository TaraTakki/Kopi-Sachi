import { createClient } from "@supabase/supabase-js";
const url = 'https://rszlelpqjgfuwsggxhxn.supabase.co'
const pub_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzemxlbHBxamdmdXdzZ2d4aHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4ODg3NjksImV4cCI6MTk4MzQ2NDc2OX0.1lx-X6UE902s4j-BcSWUhQSZulEEDql_gajx-Bj2w3A'
export const supabase = createClient(url, pub_key)