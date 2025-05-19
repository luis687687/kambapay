from ..db.db import cmd, connection
import uuid
import datetime


def create_delivery(request_id, phone, email, address, obs=None):
    delivery_id = str(uuid.uuid4())
    query = """
        INSERT INTO delivery (id, request_id, phone, email, addres, obs)
        VALUES (%s, %s, %s, %s, %s, %s)
    """
    values = (delivery_id, request_id, phone, email, address, obs)
    cmd.execute(query, values)
    connection.commit()
    return {
        "id": delivery_id,
        "request_id": request_id,
        "phone": phone,
        "email": email,
        "address": address,
        "obs": obs
    }


def get_delivery_by_id(delivery_id):
    cmd.execute("SELECT * FROM delivery WHERE id = %s", (delivery_id,))
    row = cmd.fetchone()
    if row:
        return {
            "id": row[0],
            "request_id": row[1],
            "phone": row[2],
            "email": row[3],
            "address": row[4],
            "obs": row[5]
        }
    return None


def get_deliveries_by_request(request_id):
    cmd.execute("SELECT * FROM delivery WHERE request_id = %s", (request_id,))
    rows = cmd.fetchall()
    return [
        {
            "id": row[0],
            "request_id": row[1],
            "phone": row[2],
            "email": row[3],
            "address": row[4],
            "obs": row[5]
        } for row in rows
    ]


def update_delivery(delivery_id, phone=None, email=None, address=None, obs=None):
    existing = get_delivery_by_id(delivery_id)
    if not existing:
        raise ValueError("Delivery not found")

    phone = phone or existing['phone']
    email = email or existing['email']
    address = address or existing['address']
    obs = obs if obs is not None else existing['obs']

    cmd.execute("""
        UPDATE delivery
        SET phone = %s, email = %s, addres = %s, obs = %s
        WHERE id = %s
    """, (phone, email, address, obs, delivery_id))

    return get_delivery_by_id(delivery_id)


def delete_delivery(delivery_id):
    cmd.execute("DELETE FROM delivery WHERE id = %s", (delivery_id,))
    return {"deleted": True, "id": delivery_id}
