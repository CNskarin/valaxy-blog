---
title: PHP连接MYSQL教程
date: 2019-08-16 15:01:00
---

### 一些重要的SQL命令 ###
- SELECT - 从数据库中提取数据
- UPDATE - 更新数据库中的数据
- DELETE - 从数据库中删除数据
- INSERT INTO - 向数据库中插入新数据
- CREATE DATABASE - 创建新数据库
- ALTER DATABASE - 修改数据库
- CREATE TABLE - 创建新表
- ALTER TABLE - 变更（改变）数据库表
- DROP TABLE - 删除表
- CREATE INDEX - 创建索引（搜索键）
- DROP INDEX - 删除索引
### 连接数据库 ###
```
$servername = "localhost";//数据库地址
$username = "username";//数据库用户名
$password = "password";//数据库密码
$dbname = "myDB";//数据库名
$port = "3306"//数据库端口，默认3306
// 创建连接
$conn = new mysqli($servername, $username, $password,$port);
```
### 检查连接 ###
```
// 检测连接
if ($conn->connect\_error) {
die("连接失败: " . $conn->connect\_error);
}
echo "连接成功";
```
### 创建数据库 ###
```
// 创建数据库
$sql = "CREATE DATABASE 数据库名";
if ($conn->query($sql) === TRUE) {
echo "数据库创建成功";
} else {
echo "Error creating database: " . $conn->error;
}
```
### 创建数据表并判断 ###
```
// 使用 sql 创建数据表
$sql = "CREATE TABLE 数据表名 (
id INT(6) UNSIGNED AUTO\_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg\_date TIMESTAMP
)";
if ($conn->query($sql) === TRUE) {
echo "Table 数据表名 created successfully";
} else {
echo "创建数据表错误: " . $conn->error;
}
```
[scode type="share"]上表中的注意事项:
数据类型指定列可以存储什么类型的数据。
在设置了数据类型后，你可以为每个列指定其他选项的属性：
NOT NULL - 每一行都必须含有值（不能为空），null 值是不允许的。
DEFAULT value - 设置默认值
UNSIGNED - 使用无符号数值类型，0 及正数
AUTO INCREMENT - 设置 MySQL 字段的值在新增记录时每次自动增长 1
PRIMARY KEY - 设置数据表中每条记录的唯一标识。 通常列的 PRIMARY KEY 设置为 ID 数值，与 AUTO\_INCREMENT 一起使用。
每个表都应该有一个主键(本列为 "id" 列)，主键必须包含唯一的值。[/scode]
### 插入数据并判断 ###
```
$sql = "INSERT INTO 数据表名 (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";
if ($conn->query($sql) === TRUE) {
echo "新记录插入成功";
} else {
echo "Error: " . $sql . "  
" . $conn->error;
}
```
### 读取数据 ###
```
$sql = "SELECT id, firstname, lastname FROM 数据表";
$result = $conn->query($sql);
if ($result->num\_rows > 0) {
// 输出数据
while($row = $result->fetch\_assoc()) {
echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "  
";
}
} else {
echo "0 结果";
}
```
[scode type="share"]以上代码解析如下:
首先，我们设置了 SQL 语句从指定数据表中读取 id, firstname 和 lastname 三个字段。之后我们使用该 SQL 语句从数据库中取出结果集并赋给复制给变量 $result。
函数 num\_rows() 判断返回的数据。
如果返回的是多条数据，函数 fetch\_assoc() 将结合集放入到关联数组并循环输出。 while() 循环出结果集，并输出 id, firstname 和 lastname 三个字段值。[/scode]

<!-- more -->


