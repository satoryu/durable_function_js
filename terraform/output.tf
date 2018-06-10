output "function_name" {
  value = "${azurerm_function_app.function.name}"
}

output "connection_string" {
  value = "${azurerm_storage_account.function.primary_blob_connection_string}"
}
