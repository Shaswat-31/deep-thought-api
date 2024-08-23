Philosophical Quotes API
Base URL: /api
Endpoints
Get All Quotes

URL: /quotes
Method: GET
Description: Retrieve all philosophical quotes.
Response:
200 OK:json

[
  {
    "_id": "60c72b2f9b1d4c1f88e1b1d2",
    "philosopher": "Socrates",
    "quote": "The unexamined life is not worth living.",
    "category": "Existentialism",
    "created_at": "2024-08-23T09:27:54.511Z"
  }
]
Add a New Quote

URL: /quotes
Method: POST
Description: Add a new philosophical quote.
Request Body:json
{
  "philosopher": "Socrates",
  "quote": "The unexamined life is not worth living.",
  "category": "Existentialism"
}
Response:
201 Created:json

{
  "_id": "60c72b2f9b1d4c1f88e1b1d2",
  "philosopher": "Socrates",
  "quote": "The unexamined life is not worth living.",
  "category": "Existentialism",
  "created_at": "2024-08-23T09:27:54.511Z"
}

Update a Quote

URL: /quotes/:id
Method: PUT
Description: Update an existing quote by ID.
Request Body:
json
Copy code
{
  "quote": "To find yourself, think for yourself."
}
Response: 200 
OK: json
{
  "_id": "60c72b2f9b1d4c1f88e1b1d2",
  "philosopher": "Socrates",
  "quote": "To find yourself, think for yourself.",
  "category": "Existentialism",
  "created_at": "2024-08-23T09:27:54.511Z"
}
Delete a Quote

URL: /quotes/:id
Method: DELETE
Description: Delete an existing quote by ID.
Response:
204 No Content: { "message": "Quote deleted" }