from uuid import uuid4
from datetime import datetime
from ..db.db import cmd, connection

# Service functions for the 'request' table

def create_request(user_id: str,
                   description: str,
                   link: str = None,
                   tracking_url: str = None,
                   prestations: int = 0,
                   status: int = 0) -> dict:
    """
    Create a new request record.
    """
    request_id = str(uuid4())
    now = datetime.utcnow()
    pack =  (
            request_id,
            user_id,
            description,
            link,
            tracking_url,
            prestations,
            status,
            now,
            now,
        )
    cmd.execute(
        """
        INSERT INTO request(
            id, user_id, description, link,
            trackingURL, prestations, status,
            createdAt, updateAt
        ) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """,
       pack
    )
    print(" HHA")
    connection.commit()
    print("Commited! ",request_id)
    return get_request_by_id(request_id)


def get_request_by_id(request_id: str) -> dict:
    """Retrieve a single request by its ID."""
    result = cmd.execute(
        """
        SELECT
            id, user_id, description, link,
            trackingURL AS tracking_url,
            prestations, status,
            createdAt AS created_at,
            updateAt AS updated_at
        FROM request
        WHERE id = %s
        """, (request_id,)
        
    )
    #connection.commit()
    try:
        result = cmd.fetchall()[0]
        result["created_at"] = result["created_at"].isoformat()
        result["updated_at"] = result["updated_at"].isoformat()
        return result
    except Exception as ex:
        print(ex, " bug ", request_id)
        return None


def list_requests_by_user(user_id: str) -> list:
    """List all requests for a given user."""
    return cmd.execute(
        """
        SELECT
            id, user_id, description, link,
            trackingURL AS tracking_url,
            prestations, status,
            createdAt AS created_at,
            updateAt AS updated_at
        FROM request
        WHERE user_id = %s
        ORDER BY createdAt DESC
        """,
        (user_id,)
    )


def update_request(request_id: str,
                   description: str = None,
                   link: str = None,
                   tracking_url: str = None,
                   prestations: int = None,
                   status: int = None) -> dict:
    """Update fields of an existing request."""
    fields, params = [], []

    if description is not None:
        fields.append("description = %s"); params.append(description)
    if link is not None:
        fields.append("link = %s"); params.append(link)
    if tracking_url is not None:
        fields.append("trackingURL = %s"); params.append(tracking_url)
    if prestations is not None:
        fields.append("prestations = %s"); params.append(prestations)
    if status is not None:
        fields.append("status = %s"); params.append(status)

    # always update updateAt timestamp
    now = datetime.utcnow()
    fields.append("updateAt = %s"); params.append(now)

    params.append(request_id)
    if not fields:
        raise ValueError("No fields provided to update")

    set_clause = ", ".join(fields)
    cmd.execute(f"UPDATE request SET {set_clause} WHERE id = %s", tuple(params))
    return get_request_by_id(request_id)


def delete_request(request_id: str) -> None:
    """Delete a request by its ID."""
    cmd.execute(
        """
        DELETE FROM request
        WHERE id = %s
        """,
        (request_id,)
    )

# Service functions for the 'delivery' table

def create_delivery(request_id: str,
                    phone: str,
                    email: str,
                    address: str,
                    obs: str = None) -> dict:
    """
    Create a new delivery record for a given request.

    :param request_id: UUID of the associated request
    :param phone: Delivery phone number
    :param email: Delivery email
    :param address: Delivery address
    :param obs: Optional observations
    :return: The created delivery as a dict
    """
    delivery_id = str(uuid4())
    cmd.execute(
        """
        INSERT INTO delivery(
            id, request_id, phone, email, addres, obs
        ) VALUES(%s, %s, %s, %s, %s, %s)
        """,
        (
            delivery_id,
            request_id,
            phone,
            email,
            address,
            obs,
        )
    )
    return get_delivery_by_id(delivery_id)


def get_delivery_by_id(delivery_id: str) -> dict:
    """Retrieve a single delivery by its ID."""
    result = cmd.execute(
        """
        SELECT
            id, request_id, phone, email, addres AS address, obs
        FROM delivery
        WHERE id = %s
        """,
        (delivery_id,)
    )
    if len(result):
        return result[0]
    return None


def get_deliveries_by_request(request_id: str) -> list:
    """List all deliveries for a given request."""
    return cmd.execute(
        """
        SELECT
            id, request_id, phone, email, addres AS address, obs
        FROM delivery
        WHERE request_id = %s
        ORDER BY id
        """,
        (request_id,)
    )

# Combined operations

def create_request_with_delivery(user_id: str,
                                 description: str,
                                 link: str = None,
                                 tracking_url: str = None,
                                 prestations: int = 0,
                                 status: int = 0,
                                 phone: str = None,
                                 email: str = None,
                                 address: str = None,
                                 obs: str = None) -> dict:
    """
    Create a request and its associated delivery in one operation.

    :return: A dict containing 'request' and 'delivery' sub-dicts.
    """
    request = create_request(
        user_id, description, link, tracking_url, prestations, status
    )
    delivery = create_delivery(
        request['id'], phone, email, address, obs
    )
    return {
        'request': request,
        'delivery': delivery
    }




get_request_by_id("3a1e1c91-90a2-4335-b0c6-e2eac4c99ad5")