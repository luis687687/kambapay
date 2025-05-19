import mysql.connector
from http.server import HTTPServer, BaseHTTPRequestHandler
import os, json, datetime

from .services.user import (
    create_new_account, login,
    validate_user_session, is_admin,
    get_users, get_sessions,
    active_user, desactive_user,
    change_user_status
)
from .services.request import (
    create_request, get_request_by_id,
    list_requests_by_user, update_request
)
from .services.delivery import (
    create_delivery, get_delivery_by_id,
    get_deliveries_by_request
)
from .services.combined import create_combined_request_and_delivery
from ._utils import validate_pass

HOST = "0.0.0.0"
PORT = 8000

# ------------------- Helpers -------------------

def send_json(handler, data, status=200):
    handler.send_response(status)
    handler.send_header('Content-Type', 'application/json')
    handler.end_headers()
    handler.wfile.write(json.dumps(data).encode('utf-8'))
    print("Enviado!!!!")

# ------------------- Route Handlers -------------------

def handle_register_user(handler, data):
    try:
        if not validate_pass(data['password']):
            raise ValueError('Senha não aceitável')
        resp = create_new_account(
            email=data['email'], password=data['password'],
            name=data['name'], nicname=data.get('nicname'),
            phone=data.get('phone')
        )
        send_json(handler, { 'status':'ok', **resp })
    except Exception as e:
        send_json(handler, { 'status':'error', 'message': str(e) }, status=400)


def handle_login(handler, data):
    resp = login(email=data['email'], password=data['password'])
    if resp:
        send_json(handler, resp)
        print(resp, " logado !!!")
    else:
        send_json(handler, { 'message': 'user não encontrado' }, status=404)
        print("Erroo")


def handle_check_session(handler, data):
    ok = validate_user_session(user_id=data['user_id'], session_id=data['session_id'])
    send_json(handler, { 'status': 'ok' if ok else 'error' }, status=200 if ok else 401)

# ... Additional handlers for admin/user management omitted for brevity

def handle_create_request(handler, data):
    req = create_combined_request_and_delivery(
        user_id=data['user_id'], description=data['description'],
        link=data.get('link'), tracking_url="",
        prestations=data.get('prestations',0), status=data.get('status',0),
        phone=data.get("phone", 0), email=data.get("email", 0), 
        address=data.get("address", 0), obs=data.get("obs", 0)
    )
    
    send_json(handler, req, status=201)


def handle_get_request(handler, request_id):
    req = get_request_by_id(request_id)
    if req:
        send_json(handler, req)
    else:
        send_json(handler, { 'message':'not found' }, status=404)


def handle_list_requests(handler, user_id):
    reqs = list_requests_by_user(user_id)
    send_json(handler, reqs)


def handle_update_request(handler, request_id, data):
    try:
        updated = update_request(request_id, **data)
        send_json(handler, updated)
    except ValueError as e:
        send_json(handler, { 'message': str(e) }, status=400)


def handle_create_delivery(handler, data):
    delv = create_delivery(
        request_id=data['request_id'], phone=data['phone'],
        email=data['email'], address=data['address'], obs=data.get('obs')
    )
    send_json(handler, delv, status=201)

# ------------------- HTTP Server -------------------

class RequestRouter(BaseHTTPRequestHandler):

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Authorization, Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        path = self.path.rstrip('/')
        # Static file handling
        if path in ['','/','/create','/login','/admin']:
            return super().do_GET()
        # API routes
        if path.startswith('/request/'):
            _, _, rid = path.partition('/')
            handle_get_request(self, rid)
        elif '/requests/user/' in path:
            _, _, uid = path.partition('requests/user/')
            handle_list_requests(self, uid)
        else:
            send_json(self, { 'message':'not found' }, status=404)

    def do_POST(self):
        length = int(self.headers.get('Content-Length',0))
        raw = self.rfile.read(length)
        data = json.loads(raw) if raw else {}
        path = self.path.rstrip('/')

        # Route dispatch
        if path == '/user':
            handle_register_user(self, data)
        elif path == '/user/login':
            handle_login(self, data)
        elif path == '/user/check_session':
            handle_check_session(self, data)
        elif path == '/request':
            handle_create_request(self, data)
        elif path.startswith('/request/update/'):
            rid = path.split('/request/update/')[1]
            handle_update_request(self, rid, data)
        elif path == '/delivery':
            handle_create_delivery(self, data)
        else:
            send_json(self, { 'message':'endpoint not implemented' }, status=404)

# Start server
if __name__ == '__main__':
    from socketserver import TCPServer
    with TCPServer((HOST, PORT), RequestRouter) as server:
        print(f"Server running on {HOST}:{PORT}")
        server.serve_forever()
