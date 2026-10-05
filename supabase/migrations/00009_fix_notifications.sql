-- 00009_fix_notifications.sql

-- Drop the old notifications table
DROP TABLE IF EXISTS notifications;

-- Create the new notifications table matching the UI and trigger expectations
CREATE TABLE notifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title text NOT NULL,
    message text NOT NULL,
    link text,
    is_read boolean NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Re-create the index for quick reads
CREATE INDEX idx_notifications_user_unread ON notifications (user_id) WHERE is_read = false;
