import CompanyImage from 'images/company.jpg';
import { companyDetail } from '../lib/api/company';
// サインアップ
export interface SignUpData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

// サインイン
export interface SignInData {
  email: string;
  password: string;
}

// ユーザー
export interface User {
  id: number;
  name: string;
  userId: number;
  email: string;
  password: string;
  newgraOrMidcar: string;
  engCategory: string;
  userImage: File;
  isAdmin: boolean;
  isRecruting: boolean;
}

// 会社の詳細情報を持ったインターフェース
export interface Company {
  id: number;
  companyName: string;
  companyAddress: string;
  companyOverview?: string;
  companyNumOfEmp?: string;
  companyImageURL?: string;
  techCategoryId: number;
}

// トップページなどで表示する会社名と会社画像を持った型を定義
export interface BriefCompany {
  id: number;
  companyName: string;
  companyImage?: string;
  companyOverview?: string;
}

/// TechStackで使用
export interface TechStack {
  techStackId: number;
  userId: number;
  companyId: number;
  techCategoryId: number;
  body: string;
}

/// TechStackで使用
export interface Income {
  incomeId: number;
  userId: number;
  income: string;
  techCategoryId: number;
  body: string;
}
