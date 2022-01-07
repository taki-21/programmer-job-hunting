# frozen_string_literal: true

require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  def setup
    @company = Company.new(company_name: 'freeeee', company_address: '東京都品川区五反田',
                           company_overview: '「freeeee会計」などのバックオフィス業務を改善する自社ソフトを開発している会社です。',
                           company_num_of_emp: '500~700')
  end

  test 'should be valid' do
    assert @company.valid?
  end

  test 'company name should be present' do
    @company.company_name = '   '
    assert_not @company.valid?
  end

  test 'company address should be present' do
    @company.company_address = '   '
    assert_not @company.valid?
  end

  test 'company overview should be present' do
    @company.company_overview = '   '
    assert_not @company.valid?
  end

  test 'company name should be 255 characters or less' do
    @company.company_name = 'a' * 255
    assert @company.valid?
    @company.company_name = 'a' * 256
    assert_not @company.valid?
  end

  test 'company address should be 300 charactors or less' do
    @company.company_address = 'a' * 300
    assert @company.valid?
    @company.company_address = 'a' * 301
    assert_not @company.valid?
  end

  test 'company overview should be 1500 charactors or less' do
    @company.company_overview = 'a' * 2000
    assert @company.valid?
    @company.company_overview = 'a' * 2001
    assert_not @company.valid?
  end

  test 'company name should be unique' do
    dup_company = @company.dup
    @company.save
    assert_not dup_company.valid?
  end
end
