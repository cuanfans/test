import json
import requests
from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url == "http://178.128.113.198:5000/api/v2/login":
        # Fetch JSON data from the URL
        response = requests.get("https://pastebin.com/raw/WrJKW3Tp")
        if response.status_code == 200:
            json_data = response.json()
        else:
            # Handle the case where fetching fails
            json_data = {"error": "Failed to fetch JSON data"}

        # Convert JSON data to bytes
        json_bytes = json.dumps(json_data).encode('utf-8')
        
        # Create the response
        flow.response = http.Response.make(
            200,  # (optional) status code
            json_bytes,  # (optional) content
            {"Content-Type": "application/json"},  # (optional) headers
        )
    if flow.request.pretty_url == "http://178.128.113.198:5000/api/v1/log":
        json_data = {"status": "success"}
        json_bytes = json.dumps(json_data).encode('utf-8')
        
        flow.response = http.Response.make(
            200,  # (optional) status code
            json_bytes,  # (optional) content1
            {"Content-Type": "application/json"},  # (optional) headers
        )