// サインアップ
export interface SignUpData {
  "user": {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }
}

// サインイン
export interface SignInData {
  email: string
  password: string
}

// ユーザー
export interface User {
  name:string
  userId: number
  email: string
  password: string
  newgraOrMidcar: string
  engCategory: string
  userImage: File
  isAdmin: boolean
  isRecruting: boolean
}

// 会社情報の型を定義 
export interface Company {
  id: number
  companyName: string
  companyAddress: string
  companyOverview?: string
  companyNumOfEmp?: string
  companyImage?: File
  techCategoryId: number
}

/// TechStackで使用
export interface TechStack{
  techStackId: number
  userId:number
  companyId:number
  techCategoryId: number
  body: string
}

/// TechStackで使用
export interface Income{
  incomeId: number
  userId:number
  income:string
  techCategoryId: number
  body: string
}