from .request import create_request
from .delivery import create_delivery


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
