-- 코드를 입력하세요
select count(*)
from user_info
where to_char(joined, 'yyyy') = '2021' and
      20 <= age and age <= 29;