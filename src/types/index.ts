export interface Store {
  id: string;
  name: string;
  address: string;
  contact: string;
  lastVisit?: Date;
}

export interface Visit {
  id: string;
  storeId: string;
  date: Date;
  status: 'planned' | 'in-progress' | 'completed';
  tasks: Task[];
  notes: string;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  type: 'inventory' | 'promotion' | 'display' | 'order';
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  category: string;
  stock: number;
  minStock: number;
}

export interface Order {
  id: string;
  storeId: string;
  date: Date;
  items: OrderItem[];
  status: 'draft' | 'submitted' | 'processing' | 'completed';
  total: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Promotion {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  status: 'active' | 'upcoming' | 'completed';
}