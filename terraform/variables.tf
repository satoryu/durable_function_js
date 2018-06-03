variable "name" {
  type        = "string"
  description = "your azure function name"
}

variable "location" {
  type        = "string"
  default     = "japaneast"
  description = "the location of resource group"
}
