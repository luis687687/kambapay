from .request import create_request
from .delivery import create_delivery

from .request import get_request_by_id
from .delivery import get_deliveries_by_request



def create_combined_request_and_delivery(
  user_id, description, link, 
tracking_url, prestations, status,
phone, email, address, obs=None):
    """
    Cria um registro de requisição e sua entrega correspondente.
    """
    request_data = create_request(
        user_id=user_id,
        description=description,
        link=link,
        tracking_url=tracking_url,
        prestations=prestations,
        status=status
    )
    print("EERRRRRRRRRR ", request_data)

    request_id = request_data["id"]

    delivery_data = create_delivery(
        request_id=request_id,
        phone=phone,
        email=email,
        address=address,
        obs=obs
    )

    return {
        "request": request_data,
        "delivery": delivery_data
    }













def get_request_with_delivery(request_id: str) -> dict:
    """
    Retrieve a request and its associated deliveries by request ID.

    :param request_id: UUID of the request
    :return: A dict with 'request' and 'deliveries' keys, or None if request not found
    """
    # Fetch request
    request = get_request_by_id(request_id)
    if not request:
        return None

    # Fetch associated deliveries
    deliveries = get_deliveries_by_request(request_id)

    return {
        "request": request,
        "delivery": deliveries
    }
