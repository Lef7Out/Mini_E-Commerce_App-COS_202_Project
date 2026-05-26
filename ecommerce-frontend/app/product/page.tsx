import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star, Heart, Zap } from "lucide-react";
import { Layout } from "../components/Layout";

type Product = {
  id: string | number;
  name: string;
  brand?: string;
  price: number;
  original_price?: number;
  image_url?: string;
  rating: number;
  review_count: number;
  is_deal?: boolean;
  description: string;
  stock: number;
  specs: Record<string, string | number>;
};
