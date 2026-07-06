# HTTP Status Codes

## 200 OK
Request completed successfully.
Example: GET /users returns all users.

## 201 Created
A new resource was created.
Example: POST /users creates a new user.

## 400 Bad Request
The client sent an invalid request.
Example: Missing required fields in a form.

## 401 Unauthorized
Authentication is required.
Example: User is not logged in.

## 403 Forbidden
The user is authenticated but does not have permission.
Example: A normal user tries to access an admin page.

## 404 Not Found
The requested resource does not exist.
Example: GET /users/100 when user 100 doesn't exist.

## 500 Internal Server Error
An unexpected error occurred on the server.
Example: Database connection failed.