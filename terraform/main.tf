provider "azure" {}

resource "azurerm_resource_group" "function" {
  name     = "${var.name}"
  location = "${var.location}"
}

resource "azurerm_storage_account" "function" {
  name                     = "${var.name}storage"
  resource_group_name      = "${azurerm_resource_group.function.name}"
  location                 = "${azurerm_resource_group.function.location}"
  account_tier             = "Standard"
  account_kind             = "Storage"
  account_replication_type = "LRS"
}

resource "azurerm_app_service_plan" "function" {
  name                = "${var.name}-function-plan"
  resource_group_name = "${azurerm_resource_group.function.name}"
  location            = "${azurerm_resource_group.function.location}"

  sku {
    tier = "Free"
    size = "F1"
  }
}

resource "azurerm_application_insights" "function" {
  name                = "${var.name}-ai"
  resource_group_name = "${azurerm_resource_group.function.name}"
  location            = "eastus"
  application_type    = "Other"
}

resource "azurerm_function_app" "function" {
  name                      = "${var.name}-function"
  resource_group_name       = "${azurerm_resource_group.function.name}"
  location                  = "${azurerm_resource_group.function.location}"
  app_service_plan_id       = "${azurerm_app_service_plan.function.id}"
  storage_connection_string = "${azurerm_storage_account.function.primary_connection_string}"
  version                   = "beta"

  app_settings = {
    "WEBSITE_NODE_DEFAULT_VERSION"   = "8.9.4"
    "APPINSIGHTS_INSTRUMENTATIONKEY" = "${azurerm_application_insights.function.instrumentation_key}"
  }
}
