export interface ProductoMercadoLibre {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: SalePrice;
  available_quantity: number;
  official_store_id: number;
  official_store_name: string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: Value[];
  source: number;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export interface Struct {
  number: number;
  unit: string;
}

export enum ValueType {
  List = "list",
  NumberUnit = "number_unit",
  String = "string",
}

export interface Value {
  id: null | string;
  name: string;
  struct: Struct | null;
  source: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
  metadata: InstallmentsMetadata;
}

export interface InstallmentsMetadata {
  meliplus_installments: boolean;
  additional_bank_interest: boolean;
}

export interface SalePrice {
  price_id: string;
  amount: number;
  conditions: Conditions;
  currency_id: string;
  exchange_rate: null;
  payment_method_prices: any[];
  payment_method_type: string;
  regular_amount: number;
  type: string;
  metadata: SalePriceMetadata;
}

export interface Conditions {
  eligible: boolean;
  context_restrictions: string[];
  start_time: Date;
  end_time: Date;
}

export interface SalePriceMetadata {
  order_item_price: number;
  promotion_id: string;
  promotion_type: string;
  campaign_discount_percentage: number;
  campaign_end_date: Date;
  campaign_id: string;
  discount_meli_amount: number;
  funding_mode: string;
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: null;
  promise: null;
  shipping_score: number;
}
