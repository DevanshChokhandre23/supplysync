-- Trigger to sync auth.users into public.users

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, role, full_name, status)
  VALUES (
    new.id,
    'supplier', -- default role for newly signed up users via phone
    COALESCE(new.raw_user_meta_data->>'full_name', 'Unknown User'),
    'active'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function every time a user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
