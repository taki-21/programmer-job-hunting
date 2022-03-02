resource "aws_vpc" "vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = var.app_name
  }
}

resource "aws_subnet" "public_subnets" {
  # public_subnet_cidrs分、繰り返す
  count = length(var.public_subnet_cidrs)
  # 先程作成したvpc
  vpc_id = aws_vpc.vpc.id
  availability_zone       = var.azs_name[count.index]
  cidr_block              = var.public_subnet_cidrs[count.index]
  map_public_ip_on_launch = true # パブリックIP割当
  tags = {
    Name = "${var.app_name}-public-${var.azs_name[count.index]}"
  }
}

resource "aws_subnet" "private_subnets" {
  count = length(var.private_subnet_cidrs)
  vpc_id = aws_vpc.vpc.id
  availability_zone = var.azs_name[count.index]
  cidr_block        = var.private_subnet_cidrs[count.index]
  tags = {
    Name = "${var.app_name}-private-${var.azs_name[count.index]}"
  }
}

resource "aws_internet_gateway" "igw" {
  # 先程作成したvpc
  vpc_id = aws_vpc.vpc.id
  tags = {
    Name = var.app_name
  }
}

# インターネットへのルート
resource "aws_route" "public" {
  route_table_id         = aws_vpc.vpc.default_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}
# パブリック用のルートテーブルとパブリックサブネットの関連付け
resource "aws_route_table_association" "public" {
  count = length(var.public_subnet_cidrs)
  # *.idでサブネットIdを配列を取得
  # element()で、配列のindexのIdを取得
  subnet_id      = element(aws_subnet.public_subnets.*.id, count.index)
  route_table_id = aws_vpc.vpc.default_route_table_id
}
# プライベート用のルートテーブル作成
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.vpc.id
  tags = {
    Name = "${var.app_name}-private-rtb"
  }
}
# プライベート用のルートテーブルとプライベートサブネットの関連付け
resource "aws_route_table_association" "private" {
  count = length(var.private_subnet_cidrs)
  # *.idでプライベートIdを配列を取得
  # element()で、配列のindexのIdを取得
  subnet_id      = element(aws_subnet.private_subnets.*.id, count.index)
  route_table_id = aws_route_table.private.id
}