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
  id: number
  uid: string
  provider: string
  email: string
  name: string
  nickname?: string
  image?: string
  allowPasswordChange: boolean
}

// 会社情報の型を定義 
export interface Company {
  id: number
  companyName: String
  companyOverview: String
  companyNumOfEmp: String
  companyImage: File
}