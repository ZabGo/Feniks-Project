AWS dynamoDB CLI commands:

https://docs.aws.amazon.com/cli/latest/reference/dynamodb/

https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html

LIST TABLES
aws dynamodb list-tables --endpoint-url http://localhost:8000

DELETE TABLE (in this case CUSTOMER_LIST)
aws dynamodb delete-table --table-name CUSTOMER_LIST --endpoint-url http://localhost:8000
