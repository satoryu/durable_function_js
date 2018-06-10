# Sample Durable Function in JavaScript

## Prerequisites

The following procedure is assumed that you have

* Microsoft Azure Subscription
* [Azure Functions CLI](https://github.com/Azure/azure-functions-core-tools)
* [Terraform](https://www.terraform.io/)

## Getting Started

### Provision an environment

Use the terraform files under `terraform` directory in this repository to provision an environment to run the sample durable function:

```sh
cd ./terraform
terraform apply -var 'name=durablejssample'
export FUNCTION_NAME=$(terraform output function_name)
```

This provisioning gives you

* Resource Group: `${FUNCTION_NAME}`
* Azure Storage: `${FUNCTION_NAME}storage`
* Azure Functions: `${FUNCTION_NAME}-function`
* Application Insights: `${FUNCTION_NAME}-ai`

### Upload a file to your blob storage

```sh
$ az login
$ az storage blob upload \
  --connection-string $(terraform output connection_string) \
  -c parameters -f../sample.txt -n sample.txt
```

### Deploy the sample durable functions

```sh
func azure login
func azure functionapp publish ${FUNCTION_NAME}
```

## Usage

To kick the function by sending HTTP request as follows:

```sh
curl -X POST -d '{ "filename": "sample.txt" }' \
  https://${FUNCTION_NAME}.azurewebsites.net/api/CallAPI
```
