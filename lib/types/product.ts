export interface ProductOverview {
  description?: string;
  keyBenefits?: string;
  applications?: string;
}

export interface ProductSpecifications {
  material?: string;
  shape?: string;
  dimensions?: string;
  color?: string;
  biodegradable?: string;
}

export interface ProductPackaging {
  moq?: string;
  packagingProtocol?: string;
  leadTimeAndPorts?: string;
  paymentTerms?: string;
}

export interface ProductCompliance {
  certifications?: string;
  qualityControl?: string;
  sustainability?: string;
  origin?: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  image: string;
  overview?: ProductOverview;
  specifications?: ProductSpecifications;
  packaging?: ProductPackaging;
  compliance?: ProductCompliance;
  faq?: ProductFAQ[];
}

export interface ProductCategory {
  name: string;
  items: Product[];
}
