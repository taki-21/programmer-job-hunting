class Api::V1::CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update, :destroy]

  # TOPページに表示する会社（ランダムに5社）
  def pickup
    companies = Company.order("RAND()").limit(5)
    render json: { status: 200, companies: companies }
  end

  # 会社一覧
  def index
    if params[:keyword].present?
      companies = Company.where(company_name: params[:keyword])
    else
      companies = Company.page(params[:page] ||= 1).per(10).order(created_at: :desc)
    end
    render json: { status: 200, companies: companies }
  end

  def search
    companies = Company.search(params[:keyword]).page(params[:page] ||= 1).per(10).order(created_at: :desc)
    render json: { status: 200, companies: companies }
  end

  def skillSearch
    # 該当する言語を使用している会社を抽出する
    skillId = Techcategory.where(category_name: params[:lang])

    if skillId.nil?
      render json: {status: 404, message: 'company not found'}
      return 
    end

    # Companyの中から該当する会社を取り出す
    companies = Company.where(id: skillId.ids)
    
    # 取得したデータの中からIdを取り出し、それを元にして会社情報を取得する
    render json: { status: 200 , companies: companies }
  end

  # 新規作成
  def create
    company = Company.new(company_params)
    if company.save
      render json: { status: 200, company: company }
    else
      render json: { status: 500, message: "update failed" }
    end
  end

  # 会社詳細情報
  def show
    render json: @company
  end

  # 会社情報更新
  def update
    if @company.update(company_params)
      render json: {status: 200, company: @company }
    else
      render json: { status: 500, message: "update failed" }
    end
  end

  # 会社情報削除
  def destroy
    @company.destroy
  end

  private

    def set_company
        @company = Company.find(params[:id])
    end

    def company_params
      params.require(:company).permit(:company_name, :company_overview,:company_address, :company_num_of_emp, :company_image)
    end

end
