insert into categories (
    id,
    name
) values
(4, 'pad');

insert into product_types (
    id,
    Product_name
) values 
(30, 'iPad Air (2020)'),
(31, 'iPad Air (2020)'),
(32, 'iPad Pro 11 (2022)'),
(33, 'iPad Pro 11 (2022)'),
(34, 'iPad Pro 11 (2022)'),


insert into products  (
    id,
    product_type_id, 
    price, 
    discount_price, 
    guarantee, 
    rating, 
    count_review, 
    is_available, 
    store_address, 
    color, 
    brand, 
    country,
    category_id
) values 
(100, 30, 54600, null, 12, 4.4, 323, 'y', null, 'Голубой', 'Apple', 'Chine', 4),
(101, 30, 54600, null, 12, 4.6, 234, 'y', null, 'Зеленый', 'Apple', 'Chine', 4),
(102, 31, 35000, null, 12, 4.3, 543, 'y', null, 'Голубой', 'Apple', 'Chine', 4),
(103, 31, 35000, null, 12, 4.4, 334, 'y', null, 'Зеленый', 'Apple', 'Chine', 4),

(104, 32, 128000, null, 12, 4.2 45, 'y', null, 'Cерый космос', 'Apple', 'Chine', 4),
(105, 33, 95000, null, 12, 4.2 45, 'y', null, 'Cерый космос', 'Apple', 'Chine', 4),
(106, 34, 81000, null, 12, 4.2 45, 'y', null, 'Cерый космос', 'Apple', 'Chine', 4),


insert into products_x_characteristics (
    product_types_id,
    characteristics_id ,
    value
) values 
(30, 1, 'A14 Bionic'),
(30, 2, '256'),
(30, 3, '8827'),
(30, 4, 'Li-Ion'),
(30, 5, 'алюминий'),
(30, 6, '460'),
(30, 7, '10.9'),
(30, 8, '2360x1640'),

(31, 1, 'A14 Bionic'),
(31, 2, '64'),
(31, 3, '8827'),
(31, 4, 'Li-Ion'),
(31, 5, 'алюминий'),
(31, 6, '460'),
(31, 7, '10.9'),
(31, 8, '2360x1640'),

(32, 1, 'Apple M2'),
(32, 2, '1024'),
(32, 3, '9450'),
(32, 4, 'Li-Pol'),
(32, 5, 'алюминий'),
(32, 6, '659'),
(32, 7, '11'),
(32, 8, '2388x1668'),

(33, 1, 'Apple M2'),
(33, 2, '512'),
(33, 3, '9450'),
(33, 4, 'Li-Pol'),
(33, 5, 'алюминий'),
(33, 6, '659'),
(33, 7, '11'),
(33, 8, '2388x1668'),

(34, 1, 'Apple M2'),
(34, 2, '256'),
(34, 3, '9450'),
(34, 4, 'Li-Pol'),
(34, 5, 'алюминий'),
(34, 6, '659'),
(34, 7, '11'),
(34, 8, '2388x1668'),




insert into images (products_id, image_link) VALUES 
(100, 'ipad_air_2020_blue'),
(101, 'ipad_air_2020_green'),
(102, 'ipad_air_2020_blue'),
(103, 'ipad_air_2020_green'),
(104, 'ipad_pro_11_silver'),
(105, 'ipad_pro_11_silver'),
(106, 'ipad_pro_11_silver'),
