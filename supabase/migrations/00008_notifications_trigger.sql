-- 00008_notifications_trigger.sql
CREATE OR REPLACE FUNCTION notify_on_status_change()
RETURNS trigger AS $$
DECLARE
    v_supplier_user_id uuid;
    au uuid;
BEGIN
    IF OLD.status <> NEW.status THEN
        SELECT user_id INTO v_supplier_user_id
        FROM suppliers WHERE id = NEW.supplier_id;

        IF v_supplier_user_id IS NOT NULL THEN
            INSERT INTO notifications (user_id, title, message, link)
            VALUES (
                v_supplier_user_id,
                'Invoice ' || NEW.status,
                'Your invoice ' || NEW.invoice_number || ' has been marked as ' || NEW.status || '.',
                '/portal/entries/' || NEW.id
            );
        END IF;

        IF OLD.status = 'pending' AND NEW.status = 'pending' AND NEW.source = 'supplier' THEN
            FOR au IN SELECT id FROM users WHERE role = 'admin' LOOP
                INSERT INTO notifications (user_id, title, message, link)
                VALUES (
                    au,
                    'New Supplier Invoice',
                    'A new invoice ' || NEW.invoice_number || ' was submitted.',
                    '/admin/entries/' || NEW.id || '/review'
                );
            END LOOP;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_notify_on_status_change
AFTER UPDATE OF status ON purchase_entries
FOR EACH ROW
EXECUTE FUNCTION notify_on_status_change();


CREATE OR REPLACE FUNCTION notify_on_new_comment()
RETURNS trigger AS $$
DECLARE
    v_entry_owner_id uuid;
    au uuid;
    v_author_role text;
    v_invoice_number text;
BEGIN
    SELECT role INTO v_author_role FROM users WHERE id = NEW.author_id;

    SELECT s.user_id, pe.invoice_number 
    INTO v_entry_owner_id, v_invoice_number
    FROM purchase_entries pe
    JOIN suppliers s ON pe.supplier_id = s.id
    WHERE pe.id = NEW.purchase_entry_id;

    IF v_author_role IN ('admin', 'staff') AND v_entry_owner_id IS NOT NULL THEN
        INSERT INTO notifications (user_id, title, message, link)
        VALUES (
            v_entry_owner_id,
            'New comment on ' || v_invoice_number,
            'An admin replied to your dispute.',
            '/portal/entries/' || NEW.purchase_entry_id
        );
    ELSIF v_author_role = 'supplier' THEN
        FOR au IN SELECT id FROM users WHERE role = 'admin' LOOP
            INSERT INTO notifications (user_id, title, message, link)
            VALUES (
                au,
                'Supplier commented on ' || v_invoice_number,
                'A supplier added a comment/dispute.',
                '/admin/entries/' || NEW.purchase_entry_id || '/review'
            );
        END LOOP;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_notify_on_new_comment
AFTER INSERT ON entry_comments
FOR EACH ROW
EXECUTE FUNCTION notify_on_new_comment();
